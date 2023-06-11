import { useState, useCallback, useEffect } from "react";
import { recipeData } from "../../../api/recipe-api/recipe-interface";
import { useRecipe } from "../../../services/recipes/recipe-context";
import { Query } from "appwrite";
import { useAuth } from "../../../services/auth/auth-context";

type UseContractsReturnType = {
  reciepsList: recipeData[] | null;
};

export enum recipeListType {
  SELF = "self",
  ALL = "ALL",
  VERSIONS = "versions",
}

export const useRecipes = (
  catagory: recipeListType,
  searchParam: string
): UseContractsReturnType => {
  const [reciepsList, setReciepsList] = useState<recipeData[] | null>(null);

  const { currentUser } = useAuth();

  const { getAllRecipes } = useRecipe();

  const fetchCustomerContracts = useCallback(
    async (catogary: string, searchParam: string) => {
      let result;
      try {
        switch (catogary) {
          case recipeListType.SELF:
            const selfQuery = [
              Query.equal("postedBy", [currentUser?.id ?? ""]),
              Query.equal("isVersion", false),
              Query.search("title", searchParam),
            ];
            if (searchParam === "") {
              selfQuery.pop();
            }
            result = await getAllRecipes(selfQuery);
            setReciepsList(result);
            return;
          case recipeListType.ALL:
            const allQuery = [
              Query.search("title", searchParam),
            ];
            if (searchParam === "") {
              allQuery.pop();
            }
            result = await getAllRecipes(allQuery);
            setReciepsList(result);
            return;
          case recipeListType.VERSIONS:
            const versionQuery = [
              Query.equal("postedBy", [currentUser?.id ?? ""]),
              Query.equal("isVersion", true),
              Query.search("title", searchParam),
            ];
            if (searchParam === "") {
              versionQuery.pop();
            }
            result = await getAllRecipes(versionQuery);
            // result = await getAllRecipes([
            //   Query.search("title", 'pasta'),
            // ]);
            setReciepsList(result);
            return;
        }
      } catch (error) {
        console.log(error);
      }
    },
    [catagory, searchParam]
  );

  useEffect(() => {
    fetchCustomerContracts(catagory, searchParam);
  }, [searchParam]);

  return {
    reciepsList,
  };
};

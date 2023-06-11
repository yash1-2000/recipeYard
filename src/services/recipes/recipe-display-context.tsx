import {
  FunctionComponent,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import { Query } from "appwrite";
import { useRecipe } from "./recipe-context";

export enum recipeListType {
  SELF = "self",
  ALL = "ALL",
  VERSIONS = "versions",
}

type recipeDisplayContextProps = {
  fetchRecipes: (
    catogary: recipeListType,
    searchParam: string
  ) => Promise<void>;
  setSearchStringFun: (catogary: recipeListType, searchParam: string) => void;
  selfRecipes: recipeData[] | null;
  allRecipes: recipeData[] | null;
  versionRecipes: recipeData[] | null;
  selfRecipesSearchTxt: string;
  allRecipesSearchTxt: string;
  versionRecipesSearchTxt: string;
};

const RecipeDisplayContext = createContext<recipeDisplayContextProps>({
  fetchRecipes: async () => {},
  setSearchStringFun: async () => {},
  selfRecipes: null,
  allRecipes: null,
  versionRecipes: null,
  selfRecipesSearchTxt: "",
  allRecipesSearchTxt: "",
  versionRecipesSearchTxt: "",
});

export const RecipeDisplayDataProvider: FunctionComponent<{
  children: React.ReactNode;
  userId: string | null;
}> = ({ children, userId }) => {
  const [selfRecipes, setSelfRecipes] = useState<recipeData[] | null>(null);
  const [allRecipes, setAllRecipes] = useState<recipeData[] | null>(null);
  const [versionRecipes, setVersionRecipes] = useState<recipeData[] | null>(
    null
  );

  const [selfRecipesSearchTxt, setSelfRecipesSearchTxt] = useState<string>("");
  const [allRecipesSearchTxt, setAllRecipesSearchTxt] = useState<string>("");
  const [versionRecipesSearchTxt, setVersionRecipesSearchTxt] =
    useState<string>("");
  const { getAllRecipes } = useRecipe();

  const setSearchStringFun = (catogary: recipeListType, str: string) => {
    console.log(str);
    switch (catogary) {
      case recipeListType.SELF:
        setSelfRecipesSearchTxt(str);
        return;
      case recipeListType.ALL:
        setAllRecipesSearchTxt(str);
        return;
      case recipeListType.VERSIONS:
        setVersionRecipesSearchTxt(str);
        return;
    }
  };

  const fetchRecipes = async (catogary: recipeListType) => {
    let result;
    try {
      switch (catogary) {
        case recipeListType.SELF:
          const selfQuery = [Query.equal("isVersion", false)];
          if (selfRecipesSearchTxt !== "") {
            selfQuery.push(Query.search("title", selfRecipesSearchTxt));
          }
          if (userId !== null) {
            selfQuery.push(Query.equal("postedBy", [userId]));
          }
          result = await getAllRecipes(selfQuery);
          console.log(result, selfRecipesSearchTxt);
          setSelfRecipes(result);
          return;
        case recipeListType.ALL:
          const allQuery = [Query.search("title", allRecipesSearchTxt)];
          if (allRecipesSearchTxt === "") {
            allQuery.pop();
          }
          result = await getAllRecipes(allQuery);
          setAllRecipes(result);
          return;
        case recipeListType.VERSIONS:
          const versionQuery = [Query.equal("isVersion", true)];
          if (versionRecipesSearchTxt !== "") {
            versionQuery.push(Query.search("title", versionRecipesSearchTxt));
          }
          if (userId !== null) {
            versionQuery.push(Query.equal("postedBy", [userId]));
          }
          result = await getAllRecipes(versionQuery);
          setVersionRecipes(result);
          return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes(recipeListType.SELF);
    console.log(selfRecipesSearchTxt);
  }, [selfRecipesSearchTxt]);

  useEffect(() => {
    fetchRecipes(recipeListType.ALL);
  }, [allRecipesSearchTxt]);

  useEffect(() => {
    fetchRecipes(recipeListType.VERSIONS);
  }, [versionRecipesSearchTxt]);

  return (
    <RecipeDisplayContext.Provider
      value={{
        fetchRecipes,
        setSearchStringFun,
        selfRecipes,
        allRecipes,
        versionRecipes,
        selfRecipesSearchTxt,
        allRecipesSearchTxt,
        versionRecipesSearchTxt,
      }}
    >
      {children}
    </RecipeDisplayContext.Provider>
  );
};

export const useRecipeDisplayData = (): recipeDisplayContextProps =>
  useContext(RecipeDisplayContext);

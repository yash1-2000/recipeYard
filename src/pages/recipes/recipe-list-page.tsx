import { FunctionComponent, memo, useEffect, useState } from "react";
import RecipeList from "../../views/recipeView/recipe-list";
import {
  recipeListType,
  useRecipes,
} from "../../views/recipeView/hooks/use-recipes";
import RecipeListPrivateView from "../../views/recipeView/recipe-list-private-view";

export const RecipeListPage: FunctionComponent = () => {
  const [tabNumber, setTabNumber] = useState("0");

  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");

  const { reciepsList: yourRecipes } = useRecipes(recipeListType.SELF, search1);
  const { reciepsList: allRecipes } = useRecipes(recipeListType.ALL, search2);
  const { reciepsList: yourVersions } = useRecipes(
    recipeListType.VERSIONS,
    search3
  );

  useEffect(() => {
    console.log(search1, search2, search3);
  }, [search1, search2, search3]);

  return (
    <div className="px-4">
      <div className="sm:hidden my-4">
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setTabNumber(e.target.value)}
        >
          <option value={0}>Your recipes</option>
          <option value={1}>Browse recipes</option>
          <option value={2}>Your versions</option>
        </select>
      </div>
      <ul className="hidden font-bold text-black text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex my-8 w-fit mx-auto">
        <li className="w-fit" onClick={() => setTabNumber("0")}>
          <p
            className={`inline-block w-full p-4 text-gray-900 ${
              tabNumber === "0" ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-50 rounded-l-lg md:px-16 lg:px-24`}
          >
            Your recipes
          </p>
        </li>
        <li className="w-fit" onClick={() => setTabNumber("1")}>
          <p
            className={`inline-block w-full p-4 text-gray-900 ${
              tabNumber === "1" ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-50 md:px-16 lg:px-24`}
          >
            Browse recipes
          </p>
        </li>
        <li className="w-fit" onClick={() => setTabNumber("2")}>
          <p
            className={`inline-block w-full p-4 text-gray-900 ${
              tabNumber === "2" ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-50 rounded-r-lg md:px-16 lg:px-24`}
          >
            Your versions
          </p>
        </li>
      </ul>

      {tabNumber === "0" && (
        <div className="grid-flow-col gap-4">
          {" "}
          {yourRecipes ? (
            <RecipeListPrivateView
              recipeList={yourRecipes}
              linkUrl="recipe-self"
              tabno="0"
              setSearch={(value: string) => setSearch1(value)}
            />
          ) : null}
        </div>
      )}
      {tabNumber === "1" && (
        <div className="grid-flow-col gap-4">
          {" "}
          {allRecipes ? (
            <RecipeListPrivateView
              recipeList={allRecipes}
              linkUrl="recipe-self"
              tabno="1"
              setSearch={(value: string) => setSearch2(value)}
            />
          ) : null}
        </div>
      )}
      {tabNumber === "2" && (
        <div className="grid-flow-col gap-4">
          {" "}
          {yourVersions ? (
            <RecipeListPrivateView
              recipeList={yourVersions}
              linkUrl="recipe-self"
              tabno="2"
              setSearch={(value: string) => setSearch3(value)}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};
export default memo(RecipeListPage);

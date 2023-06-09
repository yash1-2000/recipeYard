import { FunctionComponent, useEffect, useState } from "react";
import RecipeList from "../../views/recipeView/recipe-list";
import { useRecipe } from "../../services/recipes/recipe-context";
import { recipeData } from "../../api/recipe-api/recipe-interface";

export const RecipeListPage: FunctionComponent = () => {
  const [recipeList, setRecipeList] = useState<recipeData[] | null>(null);
  const [recipeAllList, setRecipeAllList] = useState<recipeData[] | null>(null);
  const [tabNumber, setTabNumber] = useState("0");
  const { getYourRecipesData, getAllRecipes } = useRecipe();

  const getRecipeListData = async () => {
    const result = await getYourRecipesData();
    setRecipeList(result);
  };

  const getAllRecipeListData = async () => {
    const result = await getAllRecipes();
    setRecipeAllList(result);
  };

  useEffect(() => {
    getRecipeListData();
    getAllRecipeListData();
  }, []);

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
          {recipeList ? (
            <RecipeList recipeList={recipeList} linkUrl="recipes-view-self" />
          ) : null}
        </div>
      )}
      {tabNumber === "1" && (
        <div className="grid-flow-col gap-4">
          {" "}
          {recipeAllList ? (
            <RecipeList
              recipeList={recipeAllList}
              linkUrl="recipes-view-self"
            />
          ) : null}
        </div>
      )}
      {tabNumber === "2" && (
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-4xl ">
          Your versions
        </h2>
      )}
    </div>
  );
};
export default RecipeListPage;

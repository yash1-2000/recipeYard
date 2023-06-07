import { FunctionComponent, useEffect, useState } from "react";
import RecipeList from "../../views/recipeView/recipe-list";
import { useRecipe } from "../../services/recipes/recipe-context";
import { recipeData } from "../../api/recipe-api/recipe-interface";

export const Recipes: FunctionComponent = () => {
  const [recipeList, setRecipeList] = useState<recipeData[] | null>(null);
  const { getAllRecipes } = useRecipe();

  const getRecipeListData = async () => {
    const result = await getAllRecipes();
    setRecipeList(result);
  };

  useEffect(() => {
    getRecipeListData();
  }, []);
  return (
    <div className="px-4">
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-4xl ">
        Browse recipes
      </h2>
      <div className="grid-flow-col gap-4">
        {" "}
        {recipeList ? (
          <RecipeList recipeList={recipeList} linkUrl="recipes-view" />
        ) : null}
      </div>
    </div>
  );
};
export default Recipes;

import { FunctionComponent, useEffect } from "react";
import { useRecipe } from "../../services/recipes/recipe-context";
import { useParams } from "react-router-dom";

export const RecipeViewSelf: FunctionComponent = () => {
  const { getRecipe } = useRecipe();
  let { recipeId } = useParams();

  const getRecipeData = async () => {
    const result = await getRecipe(recipeId ?? "");
    console.log(result);
  };

  useEffect(() => {
    getRecipeData();
  }, []);
  return <>recipe self</>;
};
export default RecipeViewSelf;

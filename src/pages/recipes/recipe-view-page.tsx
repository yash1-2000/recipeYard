import { FunctionComponent, useEffect, useState } from "react";
import { useRecipe } from "../../services/recipes/recipe-context";
import { useParams } from "react-router-dom";
import RecipePostView from "../../views/recipeView/recipe-post-view";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import PostProfileView from "../../views/profileview/post-profile-view";

export const RecipeView: FunctionComponent = () => {
  const [recipe, setRecipe] = useState<recipeData | null>(null);

  const { getRecipe } = useRecipe();
  let { recipeId } = useParams();

  const getRecipeData = async () => {
    const result = await getRecipe(recipeId ?? "");
    console.log(result, "nulllll");
    setRecipe(result);
  };

  useEffect(() => {
    console.log("csdcdscssssssssssssssssssssssss", recipeId);
    getRecipeData();
  }, []);

  useEffect(() => {
    console.log("recipe", recipe);
  }, [recipe]);
  return (
    <div className="mx-auto w-full format format-sm sm:format-base lg:format-lg bg-white px-4 py-14 md:px-12 lg:px-80 pb-12">
      {recipe && <PostProfileView userId={recipe.postedBy ?? ""} />}
      <br />
      {recipe ? <RecipePostView data={recipe} /> : null}
    </div>
  );
};
export default RecipeView;

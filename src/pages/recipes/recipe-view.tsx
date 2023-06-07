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
    <div className="pb-8">
      {recipe && <PostProfileView userId={recipe.postedBy ?? ""} />}

      {recipe ? <RecipePostView data={recipe} /> : null}
    </div>
  );
};
export default RecipeView;

import { FunctionComponent, useEffect, useState } from "react";
import { useRecipe } from "../../services/recipes/recipe-context";
import { useParams } from "react-router-dom";
import RecipePostView from "../../views/recipeView/recipe-post-view";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import PostProfileView from "../../views/profileview/post-profile-view";
import LoaderComponent from "../../components/loader-component";

export const RecipeViewPublic: FunctionComponent = () => {
  const [recipe, setRecipe] = useState<recipeData | null>(null);

  const { getRecipe } = useRecipe();
  let { recipeId } = useParams();

  const getRecipeData = async () => {
    const result = await getRecipe(recipeId ?? "");
    setRecipe(result);
  };

  useEffect(() => {
    getRecipeData();
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      {recipe ? (
        <div className="mx-auto w-full format format-sm sm:format-base lg:format-lg bg-white px-4 py-14 md:px-12 lg:px-80 pb-12">
          <PostProfileView userId={recipe.postedBy ?? ""} />
          <br />
          <RecipePostView data={recipe} />
        </div>
      ) : (
        <LoaderComponent />
      )}
    </>
  );
};
export default RecipeViewPublic;

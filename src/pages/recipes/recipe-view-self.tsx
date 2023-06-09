import { FunctionComponent, useEffect, useState } from "react";
import { useRecipe } from "../../services/recipes/recipe-context";
import { useParams } from "react-router-dom";
import RecipePostView from "../../views/recipeView/recipe-post-view";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import EditRecipeDialog from "../../views/recipeView/edit-recipe-dialog";
import { useAuth } from "../../services/auth/auth-context";
import AddRecipeDialog from "../../views/recipeView/add-recipe-dialog";
import LoaderComponent from "../../components/loader-component";
import PostProfileView from "../../views/profileview/post-profile-view";

export const RecipeViewSelf: FunctionComponent = () => {
  const [recipe, setRecipe] = useState<recipeData | null>(null);
  const [showEditRecipeDialog, setShowEditRecipeDialog] = useState(false);
  const [showCreateVersionRecipeDialog, setShowCreateVersionRecipeDialog] =
    useState(false);

  const { getRecipe } = useRecipe();
  const { currentUser } = useAuth();
  let { recipeId } = useParams();

  const getRecipeData = async () => {
    const result = await getRecipe(recipeId ?? "");
    setRecipe(result);
  };

  const isMyRecipe = (recipeAotuhorId: string): boolean => {
    return currentUser?.id === recipeAotuhorId;
  };

  const handleDialog = (recipeAotuhorId: string) => {
    if (isMyRecipe(recipeAotuhorId)) {
      setShowEditRecipeDialog(true);
    } else {
      setShowCreateVersionRecipeDialog(true);
    }
  };

  useEffect(() => {
    getRecipeData();
  }, []);
  return (
    <>
      {recipe ? (
        <div className="mx-auto w-full format format-sm sm:format-base lg:format-lg bg-white px-4 py-14 md:px-12 lg:px-80 pb-12">
          <div className="flex flex justify-between items-center flex-wrap mb-8 ">
            <div className="w-1/2">
            <PostProfileView userId={recipe.postedBy ?? ""} />
            </div>
            
            <div
              className="relative px-6 py-3 font-bold text-black group w-fit cursor-pointer mt-4 md:mt-0"
              onClick={() => handleDialog(recipe.postedBy ?? "")}
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative">
                {isMyRecipe(recipe.postedBy ?? "")
                  ? "Edit recipe"
                  : " Cook your own version"}
              </span>
            </div>
          </div>

          <RecipePostView data={recipe} />
          {showEditRecipeDialog && (
            <EditRecipeDialog
              data={recipe}
              closeDialog={() => setShowEditRecipeDialog(false)}
              getRecipeData={() => getRecipeData()}
            />
          )}
          {showCreateVersionRecipeDialog && (
            <AddRecipeDialog
              recipe={recipe}
              closeDialog={() => setShowCreateVersionRecipeDialog(false)}
            />
          )}
        </div>
      ) : (
        <LoaderComponent />
      )}
    </>
  );
};
export default RecipeViewSelf;

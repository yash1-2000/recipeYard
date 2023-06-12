import { FunctionComponent, useEffect, useState, useReducer } from "react";
import { useRecipe } from "../../services/recipes/recipe-context";
import { useParams } from "react-router-dom";
import RecipePostView from "../../views/recipeView/recipe-post-view";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import EditRecipeDialog from "../../views/recipeView/edit-recipe-dialog";
import { useAuth } from "../../services/auth/auth-context";
import AddRecipeDialog from "../../views/recipeView/add-recipe-dialog";
import LoaderComponent from "../../components/loader-component";
import PostProfileView from "../../views/profileview/post-profile-view";
import ButtonComponent from "../../components/button-component/button-component";

export const RecipeViewSelf: FunctionComponent = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(()=>{console.log('upddaattee')})

  return (
    <>
      {recipe ? (
        <div className="mx-auto w-full format format-sm sm:format-base lg:format-lg bg-white px-4 py-14 md:px-12 lg:px-80 pb-12">
          <div className="flex flex justify-between items-center flex-wrap mb-8 ">
            <div className="w-1/2">
              <PostProfileView userId={recipe.postedBy ?? ""} />
            </div>
            {!isMyRecipe(recipe.postedBy ?? "") && recipe.isVersion ? null : (
              <ButtonComponent
                onClick={() => handleDialog(recipe.postedBy ?? "")}
              >
                {" "}
                {isMyRecipe(recipe.postedBy ?? "")
                  ? "Edit recipe"
                  : " Cook your own version"}
              </ButtonComponent>
            )}
          </div>

          <RecipePostView data={recipe} />
          {showEditRecipeDialog && (
            <EditRecipeDialog
              data={recipe}
              closeDialog={() => {
                setShowEditRecipeDialog(false);
                getRecipeData();
              }}
              getRecipeData={() => getRecipeData()}
            />
          )}
          {showCreateVersionRecipeDialog && (
            <AddRecipeDialog
              recipe={recipe}
              closeDialog={() => {
                setShowCreateVersionRecipeDialog(false);
                forceUpdate();
              }}
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

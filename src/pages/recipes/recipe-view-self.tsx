import { FunctionComponent, useEffect, useState } from "react";
import { useRecipe } from "../../services/recipes/recipe-context";
import { useParams } from "react-router-dom";
import RecipePostView from "../../views/recipeView/recipe-post-view";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import AddRecipeDialog from "../../views/recipeView/add-recipe-dialog";
import EditRecipeDialog from "../../views/recipeView/edit-recipe-dialog";

export const RecipeViewSelf: FunctionComponent = () => {
  const [recipe, setRecipe] = useState<recipeData | null>(null);
  const [showEditRecipeDialog, setShowEditRecipeDialog] = useState(false);

  const { getRecipe } = useRecipe();
  let { recipeId } = useParams();

  const getRecipeData = async () => {
    const result = await getRecipe(recipeId ?? "");
    setRecipe(result);
  };

  useEffect(() => {
    getRecipeData();
  }, []);
  return (
    <div>
      {recipe ? (
        <div className="bg-white px-4 md:px-12 lg:px-80 py-12">
          <div
            className="relative px-6 py-3 font-bold text-black group w-fit cursor-pointer"
            onClick={() => setShowEditRecipeDialog(true)}
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span className="relative">Edit recipe</span>
          </div>
        </div>
      ) : null}

      {recipe ? <RecipePostView data={recipe} /> : null}
      {showEditRecipeDialog && recipe && (
        <EditRecipeDialog
          data={recipe}
          closeDialog={() => setShowEditRecipeDialog(false)}
          getRecipeData={() => getRecipeData()}
        />
      )}
    </div>
  );
};
export default RecipeViewSelf;

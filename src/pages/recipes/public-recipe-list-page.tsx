import { FunctionComponent, memo } from "react";
import { RecipeDisplayDataProvider } from "../../services/recipes/recipe-display-context";
import { PublicRecipeList } from "../../views/recipeView/recipe-page-views/public-recipe-list-view";

export const PublicRecipeListPage: FunctionComponent = () => {
  return (
    <RecipeDisplayDataProvider userId={null}>
      <PublicRecipeList />
    </RecipeDisplayDataProvider>
  );
};
export default memo(PublicRecipeListPage);

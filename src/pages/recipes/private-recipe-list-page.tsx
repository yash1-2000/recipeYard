import { FunctionComponent, memo } from "react";
import { RecipeDisplayDataProvider } from "../../services/recipes/recipe-display-context";
import { useAuth } from "../../services/auth/auth-context";
import { PrivateRecipeList } from "../../views/recipeView/recipe-page-views/private-recipe-list-view";

export const PrivateRecipeListPage: FunctionComponent = () => {
  const { currentUser } = useAuth();

  return (
    <RecipeDisplayDataProvider
      userId={currentUser === null ? null : currentUser.id}
    >
      <PrivateRecipeList />
    </RecipeDisplayDataProvider>
  );
};
export default memo(PrivateRecipeListPage);

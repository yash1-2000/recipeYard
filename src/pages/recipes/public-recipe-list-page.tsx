import { FunctionComponent, memo } from "react";
import { RecipeDisplayDataProvider } from "../../services/recipes/recipe-display-context";
import { PublicRecipeList } from "../../views/recipeView/recipe-page-views/public-recipe-list-view";
import { useParams } from "react-router-dom";

export const PublicRecipeListPage: FunctionComponent = () => {
  let { tabNo } = useParams();
  return (
    <RecipeDisplayDataProvider userId={null}>
      <PublicRecipeList tabNo={tabNo}/>
    </RecipeDisplayDataProvider>
  );
};
export default memo(PublicRecipeListPage);

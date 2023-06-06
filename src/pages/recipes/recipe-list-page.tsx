import { FunctionComponent } from "react";
import RecipeList from "../../views/recipeView/recipe-list";

export const RecipeListPage: FunctionComponent = () => {
  return (
    <>
      <div className="grid-flow-col gap-4">
        {" "}
        <RecipeList />
      </div>
    </>
  );
};
export default RecipeListPage;

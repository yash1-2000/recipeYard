import { FunctionComponent, ReactElement, useState, memo } from "react";
import AddRecipeDialog from "./add-recipe-dialog";
import ButtonComponent from "../../components/button-component/button-component";

export const AddRecipe: FunctionComponent<{ fetchFun?: () => void }> = ({
  fetchFun,
}): ReactElement => {
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const closeAddDialog = () => {
    setShowAddRecipe(false);
    if (fetchFun) {
      fetchFun();
      return;
    }
  };

  return (
    <>
      <div className="mt-8">
        <ButtonComponent onClick={() => setShowAddRecipe(true)}>
          + Add new recipe
        </ButtonComponent>
      </div>

      {showAddRecipe ? (
        <AddRecipeDialog closeDialog={() => closeAddDialog()} />
      ) : null}
    </>
  );
};
export default memo(AddRecipe);

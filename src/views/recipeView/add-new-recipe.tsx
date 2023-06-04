import { FunctionComponent, ReactElement, useState } from "react";
import AddRecipeDialog from "./add-recipe-dialog";

export const AddRecipe: FunctionComponent = (): ReactElement => {
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowAddRecipe(true)}
        className="absolute bottom-0 right-0 w-fit aspect-square rounded-full inline-flex items-center justify-center p-2 mb-2 mr-2 overflow-hidden text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <span className="w-fit h-full aspect-square rounded-full p-4 transition-all ease-in duration-75 bg-[#efeef4] group-hover:bg-opacity-0 flex items-center justify-center font-extrabold text-3xl ">
          +
        </span>
      </button>
      {showAddRecipe ? (
        <AddRecipeDialog closeDialog={() => setShowAddRecipe(false)} />
      ) : null}
    </>
  );
};
export default AddRecipe;

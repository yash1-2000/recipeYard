import { FunctionComponent, useState } from "react";
import AddRecipe from "../recipeView/add-new-recipe";
import { Link } from "react-router-dom";

export const HomePage: FunctionComponent = () => {
  return (
    <>
      <Link to="/recipes-view">
        <button>see your recipes</button>
      </Link>
      <hr />
      <Link to="/recipes">
        <button>see all recipes</button>
      </Link>

      <AddRecipe />
    </>
  );
};
export default HomePage;

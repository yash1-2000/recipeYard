import { FunctionComponent, useState, useEffect } from "react";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import { useRecipe } from "../../services/recipes/recipe-context";
import CardComponent from "../../components/card-component";
import { Link } from "react-router-dom";

export const RecipeList: FunctionComponent = () => {
  const [recipeList, setRecipeList] = useState<recipeData[] | null>(null);
  const { getYourRecipesData } = useRecipe();

  const getRecipeListData = async () => {
    const result = await getYourRecipesData();
    setRecipeList(result);
  };

  useEffect(() => {
    getRecipeListData();
  }, []);

  return (
    <>
      {recipeList ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-4">
          {recipeList.map((data: recipeData, index: number) => (
            <CardComponent recipeData={data} key={index} />
          ))}
        </div>
      ) : null}
    </>
  );
};
export default RecipeList;

import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import VersionCardComponent from "../../components/card-component/version-card";
import { useRecipe } from "../../services/recipes/recipe-context";
import { recipeData } from "../../api/recipe-api/recipe-interface";

export const OriginalRecipeView: FunctionComponent<{ recipeId: string }> = ({
  recipeId,
}): ReactElement => {
  const [recipe, setRecipe] = useState<recipeData | null>(null);

  const { getRecipe } = useRecipe();

  const getRecipeData = async () => {
    const result = await getRecipe(recipeId);
    setRecipe(result);
  };

  useEffect(() => {
    getRecipeData();
  }, []);
  return (
    <>
      {recipe && (
        <div>
          <h5 className="text-xl font-bold">Version of</h5>
          <div className="grid lg:grid-cols-1 grid-cols-1 gap-4 py-4">
            <VersionCardComponent data={recipe} />
          </div>
        </div>
      )}
    </>
  );
};

export default OriginalRecipeView;

import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import VersionCardComponent from "../../components/card-component/version-card";
import { useRecipe } from "../../services/recipes/recipe-context";
import { Query } from "appwrite";
import { recipeData } from "../../api/recipe-api/recipe-interface";

export const RecipeVersionsView: FunctionComponent<{ recipeId: string }> = ({
  recipeId,
}): ReactElement => {
  const [versions, setVersions] = useState<recipeData[] | null>(null);
  const { getAllRecipes } = useRecipe();
  const getVersions = async (): Promise<void> => {
    const result = await getAllRecipes([Query.equal("versionOf", recipeId)]);
    setVersions(result);
  };

  useEffect(() => {
    getVersions();
  }, []);
  return (
    <>
      {versions && versions.length > 0 && (
        <div>
          <h5 className="text-xl font-bold">
            Delicious versions of this recipe
          </h5>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-4">
            {versions.map((data, index) => (
              <VersionCardComponent data={data} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeVersionsView;

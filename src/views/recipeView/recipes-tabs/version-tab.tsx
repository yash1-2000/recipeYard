import { FunctionComponent, memo } from "react";
import SearchComponent from "../../../components/search-component/search-component";
import CardComponent from "../../../components/card-component";
import { recipeData } from "../../../api/recipe-api/recipe-interface";
import { useRecipeDisplayData } from "../../../services/recipes/recipe-display-context";
import LoaderComponent from "../../../components/loader-component";
import { recipeListType } from "../hooks/use-recipes";
import ButtonComponent from "../../../components/button-component/button-component";
import { useMatch } from "react-router-dom";

export const RecipeVersionTab: FunctionComponent<{
  linkUrl: string;
}> = ({ linkUrl }) => {
  const match = useMatch("/public-recipes-view/*");
  const {
    versionRecipes,
    setSearchStringFun,
    versionRecipesSearchTxt,
    fetchRecipes,
  } = useRecipeDisplayData();

  const getSearchStr = (str: string) => {
    setSearchStringFun(recipeListType.VERSIONS, str);
  };

  return (
    <>
      {versionRecipes ? (
        <div>
          <SearchComponent
            searchfun={getSearchStr}
            value={versionRecipesSearchTxt}
          />
          <div className="grid-flow-col gap-4 relative -z-999">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-4">
              {versionRecipes.map((data: recipeData, index: number) => (
                <CardComponent
                  recipeData={data}
                  linkUrl={linkUrl}
                  key={index}
                />
              ))}
            </div>
          </div>
          <br />

          {match !== null && (
            <div className="flex justify-center my-4">
              <ButtonComponent
                onClick={() => fetchRecipes(recipeListType.VERSIONS)}
              >
                Load more
              </ButtonComponent>
            </div>
          )}

          <br />
        </div>
      ) : (
        <LoaderComponent />
      )}
    </>
  );
};
export default memo(RecipeVersionTab);

import { FunctionComponent, memo } from "react";
import SearchComponent from "../../../components/search-component/search-component";
import CardComponent from "../../../components/card-component";
import { recipeData } from "../../../api/recipe-api/recipe-interface";
import { useRecipeDisplayData } from "../../../services/recipes/recipe-display-context";
import LoaderComponent from "../../../components/loader-component";
import { recipeListType } from "../hooks/use-recipes";

export const RecipeSelfTab: FunctionComponent<{
  linkUrl: string;
}> = ({ linkUrl }) => {
  const { selfRecipes, setSearchStringFun, selfRecipesSearchTxt } =
    useRecipeDisplayData();

  const getSearchStr = (str: string) => {
    setSearchStringFun(recipeListType.SELF, str);
  };

  return (
    <>
      {selfRecipes ? (
        <div>
          <SearchComponent
            searchfun={getSearchStr}
            value={selfRecipesSearchTxt}
          />
          <div className="grid-flow-col gap-4 relative -z-999">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-4">
              {selfRecipes.map((data: recipeData, index: number) => (
                <CardComponent
                  recipeData={data}
                  linkUrl={linkUrl}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </>
  );
};
export default memo(RecipeSelfTab);

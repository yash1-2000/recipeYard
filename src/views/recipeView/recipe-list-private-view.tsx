import { FunctionComponent, memo } from "react";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import CardComponent from "../../components/card-component";
import AddRecipe from "./add-new-recipe";
import SearchComponent from "../../components/search-component/search-component";

export const RecipeListPrivateView: FunctionComponent<{
  recipeList: recipeData[];
  linkUrl: string;
  tabno: string;
  setSearch: any;
}> = ({ recipeList, linkUrl, tabno, setSearch }) => {
  const getSearchStr = (str: string) => {
    setSearch(str);
  };
  return (
    <>
      <SearchComponent searchfun={getSearchStr} />
      {tabno === "0" ? <AddRecipe /> : null}
      <div className="grid-flow-col gap-4 relative -z-999">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-4">
          {recipeList.map((data: recipeData, index: number) => (
            <CardComponent recipeData={data} linkUrl={linkUrl} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
export default memo(RecipeListPrivateView);

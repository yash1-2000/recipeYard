import { FunctionComponent, memo, useState } from "react";
import { Tabscomponent } from "../../../components/tabs-component/tab-component";
import { AddRecipe } from "../add-new-recipe";
import { RecipeSelfTab } from "../recipes-tabs/self-tab";
import { RecipeAllTab } from "../recipes-tabs/all-tab";
import { RecipeVersionTab } from "../recipes-tabs/version-tab";
import {
  recipeListType,
  useRecipeDisplayData,
} from "../../../services/recipes/recipe-display-context";

export const PrivateRecipeList: FunctionComponent = () => {
  const [tabNumber, setTabNumber] = useState("0");
  const { fetchRecipes } = useRecipeDisplayData();

  return (
    <div className="px-4">
      <Tabscomponent
        tabsList={["Your recipes", "Browse recipes", "Your versions"]}
        onChange={(val: string) => setTabNumber(val)}
        currentTabNo={tabNumber}
      />
      <AddRecipe fetchFun={() => fetchRecipes(recipeListType.SELF)} />
      <br />

      {tabNumber === "0" && <RecipeSelfTab linkUrl="recipe-self" />}
      {tabNumber === "1" && <RecipeAllTab linkUrl="recipe-self" />}
      {tabNumber === "2" && <RecipeVersionTab linkUrl="recipe-self" />}
    </div>
  );
};
export default memo(PrivateRecipeList);

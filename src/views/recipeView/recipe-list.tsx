import { FunctionComponent } from "react";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import CardComponent from "../../components/card-component";

export const RecipeList: FunctionComponent<{
  recipeList: recipeData[];
  linkUrl: string;
}> = ({ recipeList, linkUrl }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-4">
      {recipeList.map((data: recipeData, index: number) => (
        <CardComponent recipeData={data} linkUrl={linkUrl} key={index} />
      ))}
    </div>
  );
};
export default RecipeList;

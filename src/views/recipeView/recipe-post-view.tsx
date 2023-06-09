import { FunctionComponent, ReactElement } from "react";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import { format } from "date-fns";
import RecipeVersionsView from "./recipe-versions-view";
import OriginalRecipeView from "./original-versions-view";

export const RecipePostView: FunctionComponent<{ data: recipeData }> = ({
  data,
}): ReactElement => {

  return (
    <>
      <article>
        <header className="mb-4 lg:mb-6 not-format">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
            {data.title}
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl">
            {data.postedAt
              ? format(new Date(data.postedAt), "dd MMM yyyy")
              : ""}
          </p>
        </header>
        {data.recipeImg && (
          <figure
            className="lg:w-3/4 md:w-3/4 w-full mx-auto my-10 bg-cover bg-center aspect-video"
            style={{
              backgroundImage: `url(${data.recipeImg})`,
            }}
          ></figure>
        )}

        <h5 className="text-xl font-bold my-3">Description</h5>
        <p className="mb-4 text-lg font-normal text-gray-500 whitespace-pre-wrap">
          {data.description}
        </p>
        <h5 className="text-xl font-bold my-3">Ingredients</h5>
        <p className="text-lg text-gray-500 whitespace-pre-wrap">{data.ingredients}</p>
        <h5 className="text-xl font-bold my-3">Steps</h5>
        <p className="text-lg text-gray-500 whitespace-pre-wrap">{data.steps}</p>
        <br />
        <RecipeVersionsView recipeId={data.id} />
        {data.isVersion && (
          <OriginalRecipeView recipeId={data.versionOf ?? ""} />
        )}
      </article>
    </>
  );
};

export default RecipePostView;

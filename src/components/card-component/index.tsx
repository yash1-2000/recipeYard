import { FunctionComponent, ReactElement } from "react";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import { format } from "date-fns";
import { Link } from "react-router-dom";
// import { FiExternalLink } from "react-icons/fi";

export const CardComponent: FunctionComponent<{
  recipeData: recipeData;
  linkUrl: string;
}> = ({ recipeData, linkUrl }): ReactElement => {
  return (
    <>
      <div className="inline-block p-2 text-left align-middle transition-all transform bg-white rounded-md w-full sm:p-4 my-4">
        <Link to={`/${linkUrl}/${recipeData.id}`}>
          <div className="flex flex-col justify-between h-full">
            <div>
              <div
                className="flex items-center justify-center rounded-md mx-auto  shadow-xl aspect-video bg-cover"
                style={{
                  backgroundImage: `url(${
                    recipeData.recipeImg ??
                    "https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                  })`,
                }}
              ></div>

              <div className="mt-5">
                <h3 className="text-lg font-medium text-primary_text text-center">
                  {recipeData.title ?? ""}
                </h3>
                <p className="mt-2 text-secondary_text">
                  {recipeData.description ?? ""}
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <div className="text-sm font-bold text-secondary_text mb-2">
                {recipeData.postedAt
                  ? format(new Date(recipeData.postedAt), "dd MMM yyyy")
                  : ""}
              </div>
              {/* <div className="text-xl font-bold text-secondary_text mb-2">
              <FiExternalLink />
            </div> */}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardComponent;

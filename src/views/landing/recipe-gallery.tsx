import { FunctionComponent } from "react";
import HoverCardComponent from "../../components/card-component/hover-card";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useRecipe } from "../../services/recipes/recipe-context";

const RecipeGallery: FunctionComponent = () => {
  const { displayRecipes } = useRecipe();
  return (
    <>
      {displayRecipes ? (
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center font-style_heading2">
            Delicious recipes
          </h2>
          <div className="lg:w-5/6 md:w-5/6 mx-auto px-5 py-2 lg:px-32 lg:pt-8 relative">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex lg:w-1/2 w-full aspect-video flex-wrap">
                <div className="md:w-1/2 w-full p-1 aspect-video md:p-2">
                  <HoverCardComponent data={displayRecipes[0]} />
                </div>
                <div className="md:w-1/2 w-full p-1 aspect-video md:p-2">
                  <HoverCardComponent data={displayRecipes[1]} />
                </div>
                <div className="w-full p-1 aspect-video md:p-2">
                  <HoverCardComponent data={displayRecipes[2]} />
                </div>
              </div>
              <div className="flex lg:w-1/2 w-full flex-wrap">
                <div className="w-full aspect-video p-1 md:p-2">
                  <HoverCardComponent data={displayRecipes[3]} />
                </div>
                <div className="md:w-1/2 w-full aspect-video p-1 md:p-2">
                  <HoverCardComponent data={displayRecipes[4]} />
                </div>
                <div className="md:w-1/2 w-full aspect-video p-1 md:p-2">
                  <HoverCardComponent data={displayRecipes[5]} />
                </div>
              </div>
            </div>
            <Link to="/public-recipes-view">
              <h6 className="flex gap-4 items-center justify-end py-4 text-lg font-bold cursor-pointer">
                See more
                <FiExternalLink />
              </h6>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RecipeGallery;

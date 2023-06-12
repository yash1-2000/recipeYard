import { FunctionComponent, ReactElement, useState } from "react";
import { recipeData } from "../../api/recipe-api/recipe-interface";

export const HoverCardComponent: FunctionComponent<{ data: recipeData }> = ({
  data,
}): ReactElement => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      className="relative w-full h-full overflow-hidden bg-white rounded-lg shadow-lg bg-cover bg-center bg-[#4b5563] cursor-pointer"
      style={{
        backgroundImage: `url(${data.recipeImg})`,
      }}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div
        className={`absolute top-0 left-0 h-full w-full aspect-square rounded-lg bg-[#000000bd] ${
          showInfo ? "translate-y-0" : "translate-y-full"
        } transition ease-in-out duration-300 delay-150`}
      >
        <div className="relative text-xl h-full w-full font-bold text-white">
          <h1 className="font-style_heading4 absolute -top-[80px] text-center w-full py-7 bg-gradient-to-t from-[#000000] ">
            {data.title ?? ""}
          </h1>
          <div className="h-full w-full font-thin text-sm flex items-center justify-center p-4">
            <p>
              {data.description
                ? `${data.description.substring(200, length) + " . . ."}`
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCardComponent;

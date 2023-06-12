import { FunctionComponent, ReactElement } from "react";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import { format } from "date-fns";
import { useAuth } from "../../services/auth/auth-context";

export const VersionCardComponent: FunctionComponent<{ data: recipeData }> = ({
  data,
}): ReactElement => {
  const { currentUser } = useAuth();

  return (
    <div className="w-full px-8 py-4 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600">
          {data.postedAt ? format(new Date(data.postedAt), "dd MMM yyyy") : ""}
        </span>
      </div>

      <div className="mt-2">
        <p className="text-xl font-bold text-gray-700 hover:text-gray-600 hover:underline">
          {data.title ?? ""}
        </p>
        <p className="mt-2 text-gray-600">
          {data.description
            ? `${data.description.substring(250, length) + " . . ."}`
            : ""}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <a
          href={`${
            currentUser === null
              ? "/recipe-public/" + data.id
              : "/recipe-self/" + data.id
          }`}
          target="blank"
        >
          <p className="text-blue-600 hover:underline">Read more</p>
        </a>

        <div className="flex items-center">
          <p className="font-bold text-gray-700 cursor-pointer" role="link">
            {data.authorName ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VersionCardComponent;

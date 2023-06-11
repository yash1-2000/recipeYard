import { FunctionComponent, ReactElement } from "react";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import { format } from "date-fns";
import { useAuth } from "../../services/auth/auth-context";
import { Link } from "react-router-dom";

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
        <p className="mt-2 text-gray-600">{data.description ?? ""}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Link
          to={`${
            currentUser === null
              ? "/recipe/" + data.id
              : "/recipe-self/" + data.id
          }`}
        >
          <p className="text-blue-600 hover:underline">Read more</p>
        </Link>

        <div className="flex items-center">
          <a className="font-bold text-gray-700 cursor-pointer" role="link">
            {data.authorName ?? ""}
          </a>
        </div>
      </div>
    </div>
  );
};

export default VersionCardComponent;
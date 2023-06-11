import { FunctionComponent, ReactElement, useState } from "react";

export const SearchComponent: FunctionComponent<{
  searchfun: (searchStr: string) => void;
}> = ({ searchfun }): ReactElement => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <div className="flex items-center w-full">
        <label className="sr-only">Search</label>
        <div className="relative w-full mr-4">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-3 text-lg "
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyUp={(e) => {
              e.key === "Enter" ? searchfun(searchText) : null;
            }}
          />
        </div>
        <div
          className="relative p-4 font-bold text-black group w-fit cursor-pointer mt-4 md:mt-0 aspect-square rounded-full"
          onClick={() => searchfun(searchText)}
        >
          <span className="absolute inset-0 w-fit transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0 aspect-square rounded-full"></span>
          <span className="absolute inset-0 w-fit border-4 border-black aspect-square rounded-full"></span>
          <span className="relative">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                // fill="black"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;

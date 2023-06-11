import { FunctionComponent, memo } from "react";

export const Tabscomponent: FunctionComponent<{
  tabsList: string[];
  onChange: (value: string) => void;
  currentTabNo: string;
}> = ({ tabsList, onChange, currentTabNo }) => {
  const getTabRadius = (index: number): string => {
    if (index === 0) return "rounded-l-lg";
    if (!tabsList[index + 1]) return "rounded-r-lg";
    return "";
  };
  return (
    <>
      <div className="sm:hidden my-4">
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => onChange(e.target.value)}
        >
          {tabsList.map((tabName, index) => (
            <option value={index}>{tabName}</option>
          ))}
        </select>
      </div>
      <ul className="hidden font-bold text-black text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex my-8 w-fit mx-auto">
        {tabsList.map((tabName, index) => (
          <li
            className="w-fit"
            onClick={() => onChange(index.toString())}
            key={index}
          >
            <p
              className={`inline-block w-full p-4 text-gray-900 ${
                currentTabNo === index.toString() ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-50 ${getTabRadius(index)} md:px-16 lg:px-24`}
            >
              {tabName}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default memo(Tabscomponent);

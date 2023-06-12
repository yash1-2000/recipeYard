import { FunctionComponent, memo, useState } from "react";
import { Tabscomponent } from "../../../components/tabs-component/tab-component";
import { RecipeAllTab } from "../recipes-tabs/all-tab";
import { RecipeVersionTab } from "../recipes-tabs/version-tab";
import { useAuth } from "../../../services/auth/auth-context";

export const PublicRecipeList: FunctionComponent<{ tabNo: any }> = ({
  tabNo,
}) => {

  const [tabNumber, setTabNumber] = useState(
    tabNo === undefined || tabNo > 1 ? "0" : tabNo
  );

  const { currentUser } = useAuth();

  return (
    <div className="px-4">
      <Tabscomponent
        tabsList={["Browse recipes", "versions"]}
        onChange={(val: string) => setTabNumber(val)}
        currentTabNo={tabNumber}
      />
      {tabNumber === "0" && (
        <RecipeAllTab
          linkUrl={`${currentUser === null ? "recipe-public" : "recipe-self"}`}
        />
      )}
      {tabNumber === "1" && (
        <RecipeVersionTab
          linkUrl={`${currentUser === null ? "recipe-public" : "recipe-self"}`}
        />
      )}
    </div>
  );
};
export default memo(PublicRecipeList);

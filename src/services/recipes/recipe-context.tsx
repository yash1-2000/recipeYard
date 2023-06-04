import {
  FunctionComponent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { profileData } from "../../api/profile-api/profile-interface";
import { alertType, useToastContext } from "../alert/alert-context";
import {
  createProfile,
  getProfileByUserId,
  updateProfile,
} from "../../api/profile-api";
import { useAuth } from "../auth/auth-context";
import { recipeFormData } from "../../api/recipe-api/recipe-interface";
import { createRecipe } from "../../api/recipe-api";

type recipeContextProps = {
  addRecipe: (data: recipeFormData) => Promise<void>;
};

const RecipeContext = createContext<recipeContextProps>({
  addRecipe: async () => {},
});

export const RecipeDataProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentProfileData, setCurrentProfileData] =
    useState<profileData | null>(null);

  const { currentUser } = useAuth();

  const { addToasts } = useToastContext();

  const getCurrentProfileData = async (): Promise<void> => {
    if (currentUser === null) return;
    const result = await getProfileByUserId(currentUser.id);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      return;
    } else {
      if ("data" in result) {
        setCurrentProfileData(() => result.data ?? null);
      }
      return;
    }
  };

  const editProfileData = async (data: profileData): Promise<boolean> => {
    const result = await updateProfile(data);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      return false;
    } else {
      addToasts(alertType.success, result.message);
      return true;
    }
  };

  const addRecipe = async (data: recipeFormData): Promise<void> => {
    console.log("xxxxxxxxxxxxx", currentUser);
    if (currentUser === null) return;
    console.log("lllllllllllllll", currentUser);
    const result = await createRecipe(data);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
    } else {
      console.log(result);
    }
  };

  useEffect(() => {
    getCurrentProfileData();
  }, [currentUser]);

  return (
    <RecipeContext.Provider
      value={{
        addRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = (): recipeContextProps => useContext(RecipeContext);

import { FunctionComponent, createContext, useContext } from "react";
import { profileData } from "../../api/profile-api/profile-interface";
import { alertType, useToastContext } from "../alert/alert-context";
import { updateProfile } from "../../api/profile-api";
import { useAuth } from "../auth/auth-context";
import {
  recipeData,
  recipeFormData,
} from "../../api/recipe-api/recipe-interface";
import {
  createRecipe,
  getRecipesById,
  getRecipesByUserId,
} from "../../api/recipe-api";

type recipeContextProps = {
  addRecipe: (data: recipeFormData) => Promise<void>;
  getYourRecipesData: () => Promise<recipeData[] | null>;
  getRecipe: (recipeId: string) => Promise<recipeData | null>;
};

const RecipeContext = createContext<recipeContextProps>({
  addRecipe: async () => {},
  getYourRecipesData: async () => null,
  getRecipe: async () => null,
});

export const RecipeDataProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { currentUser } = useAuth();

  const { addToasts } = useToastContext();

  const getYourRecipesData = async (): Promise<recipeData[] | null> => {
    if (currentUser === null) return null;
    const result = await getRecipesByUserId(currentUser.id);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      return null;
    } else {
      if ("data" in result) {
        return result.data ?? null;
      }
      return null;
    }
  };

  const getRecipe = async (
    recipeId: string
  ): Promise<recipeData | null> => {
    if (currentUser === null) return null;
    const result = await getRecipesById(recipeId);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      return null;
    } else {
      if ("data" in result) {
        return result.data ?? null;
      }
      return null;
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
    if (currentUser === null) return;
    const currDate = new Date();
    data.postedAt = currDate.toISOString();
    const result = await createRecipe(data);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
    } else {
      console.log(result);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        addRecipe,
        getYourRecipesData,
        getRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = (): recipeContextProps => useContext(RecipeContext);

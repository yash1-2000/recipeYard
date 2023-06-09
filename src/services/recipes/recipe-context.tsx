import {
  FunctionComponent,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { alertType, useToastContext } from "../alert/alert-context";
import { useAuth } from "../auth/auth-context";
import {
  recipeData,
  recipeFormData,
} from "../../api/recipe-api/recipe-interface";
import {
  createRecipe,
  getRecipes,
  getRecipesById,
  getRecipesByUserId,
  updateRecipe,
} from "../../api/recipe-api";
import { Query } from "appwrite";

type recipeContextProps = {
  addRecipe: (data: recipeFormData) => Promise<void>;
  getYourRecipesData: () => Promise<recipeData[] | null>;
  getAllRecipes: (queryArr?: any[]) => Promise<recipeData[] | null>;
  getRecipe: (recipeId: string) => Promise<recipeData | null>;
  editRecipe: (data: recipeFormData) => Promise<void>;
  displayRecipes: recipeData[] | null;
};

const RecipeContext = createContext<recipeContextProps>({
  addRecipe: async () => {},
  getYourRecipesData: async () => null,
  getAllRecipes: async () => null,
  getRecipe: async () => null,
  editRecipe: async () => {},
  displayRecipes: null,
});

export const RecipeDataProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [displayRecipes, setDisplayRecipes] = useState<recipeData[] | null>(
    null
  );
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

  const getAllRecipes = async (
    queryArr?: any[]
  ): Promise<recipeData[] | null> => {
    const result = await getRecipes(queryArr ?? []);
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

  const getRecipe = async (recipeId: string): Promise<recipeData | null> => {
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

  const editRecipe = async (data: recipeFormData): Promise<void> => {
    const result = await updateRecipe(data);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      return;
    } else {
      addToasts(alertType.success, result.message);
      return;
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
  
    }
  };

  useEffect(() => {
    getAllRecipes([Query.limit(6)])
      .then((result) => setDisplayRecipes(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <RecipeContext.Provider
      value={{
        addRecipe,
        getYourRecipesData,
        getAllRecipes,
        getRecipe,
        editRecipe,
        displayRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = (): recipeContextProps => useContext(RecipeContext);

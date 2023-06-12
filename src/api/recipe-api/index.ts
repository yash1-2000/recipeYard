import { ID, Models, Permission, Query, Role } from "appwrite";
import { databases } from "../backend-config/appwrite-config";
import { responseInterface } from "../api-utils/response-interface";
import { omit } from "lodash";
import { getRecipeData, recipeData, recipeFormData } from "./recipe-interface";
import { responseToRecipeModel } from "./model";

export const createRecipe = async (
  recipeDataObj: recipeFormData
): Promise<responseInterface<recipeData | null>> => {
  try {
    const result = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_RECIPE_COLLECTION_ID,
      ID.unique(),
      omit(getRecipeData(recipeDataObj), "id"),
      [
        Permission.read(Role.any()),
        Permission.update(Role.user(recipeDataObj.postedBy)),
        Permission.delete(Role.user(recipeDataObj.postedBy)),
      ]
    );
    return {
      state: "success",
      data: responseToRecipeModel(result),
      message: "Recipe created successfully",
    };
  } catch (error) {
    const errorInfo = JSON.parse(JSON.stringify(error));
    return {
      state: "failure",
      statusCode: errorInfo.response.code,
      message: errorInfo.response.message,
      type: errorInfo.response.type,
    };
  }
};

export const getRecipesByUserId = async (
  userId: string
): Promise<responseInterface<recipeData[] | null>> => {
  try {
    const result = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_RECIPE_COLLECTION_ID,
      [Query.equal("postedBy", [userId])]
    );
    return {
      state: "success",
      data: result.documents.map((data, _) => responseToRecipeModel(data)),
    };
  } catch (error) {
    const errorInfo = JSON.parse(JSON.stringify(error));
    return {
      state: "failure",
      statusCode: errorInfo.response.code,
      message: errorInfo.response.message,
      type: errorInfo.response.type,
    };
  }
};

export const getRecipes = async (
  queryArray: any[]
): Promise<responseInterface<recipeData[] | null>> => {
  try {
    const result = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_RECIPE_COLLECTION_ID,
      queryArray
    );
    return {
      state: "success",
      data: result.documents.map((data, _) => responseToRecipeModel(data)),
    };
  } catch (error) {
    const errorInfo = JSON.parse(JSON.stringify(error));
    return {
      state: "failure",
      statusCode: errorInfo.response.code,
      message: errorInfo.response.message,
      type: errorInfo.response.type,
    };
  }
};

export const getRecipesById = async (
  recipeId: string
): Promise<responseInterface<recipeData | null>> => {
  try {
    const result = await databases.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_RECIPE_COLLECTION_ID,
      recipeId
    );
    return {
      state: "success",
      data: responseToRecipeModel(result),
    };
  } catch (error) {
    const errorInfo = JSON.parse(JSON.stringify(error));
    return {
      state: "failure",
      statusCode: errorInfo.response.code,
      message: errorInfo.response.message,
      type: errorInfo.response.type,
    };
  }
};

export const updateRecipe = async (
  data: recipeFormData
): Promise<responseInterface<Models.Document>> => {
  try {
    const result = await databases.updateDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_RECIPE_COLLECTION_ID,
      data.id,
      omit(getRecipeData(data), "id")
    );
    return {
      state: "success",
      data: result,
    };
  } catch (error) {
    const errorInfo = JSON.parse(JSON.stringify(error));
    return {
      state: "failure",
      statusCode: errorInfo.response.code,
      message: errorInfo.response.message,
      type: errorInfo.response.type,
    };
  }
};

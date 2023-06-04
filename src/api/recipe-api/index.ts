import { ID, Models, Permission, Query, Role } from "appwrite";
import { databases } from "../backend-config/appwrite-config";

import { responseInterface } from "../api-utils/response-interface";

import { omit } from "lodash";
import {
  getDefaultProfileData2,
  profileData,
} from "../profile-api/profile-interface";
import { responseToProfileModel } from "../profile-api/model";
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
      message: "Profile created successfully",
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

// export const getProfileByUserId = async (
//   userId: string
// ): Promise<responseInterface<profileData | null>> => {
//   try {
//     const result = await databases.listDocuments(
//       import.meta.env.VITE_APPWRITE_DATABASE_ID,
//       import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID,
//       [Query.equal("userId", [userId])]
//     );
//     return {
//       state: "success",
//       data: responseToProfileModel(result.documents[0]),
//     };
//   } catch (error) {
//     const errorInfo = JSON.parse(JSON.stringify(error));
//     return {
//       state: "failure",
//       statusCode: errorInfo.response.code,
//       message: errorInfo.response.message,
//       type: errorInfo.response.type,
//     };
//   }
// };

// export const updateProfile = async (
//   profileData: profileData
// ): Promise<responseInterface<Models.Document>> => {
//   try {
//     const result = await databases.updateDocument(
//       import.meta.env.VITE_APPWRITE_DATABASE_ID,
//       import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID,
//       profileData.id,
//       omit(getDefaultProfileData2(profileData), "id")
//     );
//     return {
//       state: "success",
//       data: result,
//     };
//   } catch (error) {
//     const errorInfo = JSON.parse(JSON.stringify(error));
//     return {
//       state: "failure",
//       statusCode: errorInfo.response.code,
//       message: errorInfo.response.message,
//       type: errorInfo.response.type,
//     };
//   }
// };

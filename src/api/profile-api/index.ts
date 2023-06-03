import { ID, Models, Permission, Query, Role } from "appwrite";
import { databases } from "../backend-config/appwrite-config";
import {
  getDefaultProfileData,
  getDefaultProfileData2,
  profileData,
} from "./profile-interface";
import { responseInterface } from "../api-utils/response-interface";
import { responseToProfileModel } from "./model";
import { omit } from "lodash";

export const createProfile = async (
  profileDataObj: profileData
): Promise<responseInterface<profileData | null>> => {
  try {
    const result = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID,
      ID.unique(),
      omit(getDefaultProfileData2(profileDataObj), "id"),
      [
        Permission.read(Role.any()),
        Permission.update(Role.user(profileDataObj.userId)),
        Permission.delete(Role.user(profileDataObj.userId)),
      ]
    );
    console.log(result);
    return {
      state: "success",
      data: responseToProfileModel(result),
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

export const getProfileByUserId = async (
  userId: string
): Promise<responseInterface<profileData | null>> => {
  console.log(userId);
  try {
    const result = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID,
      [Query.equal("userId", [userId])]
    );
    console.log(result);
    return {
      state: "success",
      data: responseToProfileModel(result.documents[0]),
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

export const updateProfile = async (
  profileData: profileData
): Promise<responseInterface<Models.Document>> => {
  try {
    const result = await databases.updateDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID,
      profileData.id,
      omit(getDefaultProfileData2(profileData), "id")
    );
    console.log(result);
    return {
      state: "success",
      data: result,
    };
  } catch (error) {
    const errorInfo = JSON.parse(JSON.stringify(error));
    console.log(errorInfo);
    return {
      state: "failure",
      statusCode: errorInfo.response.code,
      message: errorInfo.response.message,
      type: errorInfo.response.type,
    };
  }
};

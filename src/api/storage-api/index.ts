import { ID } from "appwrite";
import { responseInterface } from "../api-utils/response-interface";
import { storage } from "../backend-config/appwrite-config";

export const uploaProfileImage = async (
  file: any
): Promise<responseInterface<string>> => {
  try {
    const result = await storage.createFile(
      import.meta.env.VITE_APPWRITE_PROFILE_BUCKET_ID,
      ID.unique(),
      file
    );

    return {
      state: "success",
      data: `https://cloud.appwrite.io/v1/storage/buckets/${
        result.bucketId
      }/files/${result.$id}/view?project=${
        import.meta.env.VITE_APPWRITE_PROJECT_ID
      }`,
    };
  } catch (error) {
    const errorInfo = JSON.parse(JSON.stringify(error));
    console.log(error);
    return {
      state: "failure",
      statusCode: errorInfo.response.code,
      message: errorInfo.response.message,
      type: errorInfo.response.type,
    };
  }
};

export const deleteProfileImage = async (
  fileURL: any
): Promise<responseInterface<string>> => {
  // Define a regular expression pattern to match the fileId
  const pattern = /\/files\/([^/]+)/;

  // Find the fileId using regular expression matching
  const match = fileURL.match(pattern);

  const fileId = match[1];

  try {
    await storage.deleteFile(
      import.meta.env.VITE_APPWRITE_PROFILE_BUCKET_ID,
      fileId
    );

    return {
      state: "success",
      data: "successfully deleted",
    };
  } catch (error) {
    const errorInfo = JSON.parse(JSON.stringify(error));
    console.log(error);
    return {
      state: "failure",
      statusCode: errorInfo.response.code,
      message: errorInfo.response.message,
      type: errorInfo.response.type,
    };
  }
};

export const uploaRecipeImage = async (
  file: any
): Promise<responseInterface<string>> => {
  try {
    const result = await storage.createFile(
      import.meta.env.VITE_APPWRITE_POST_BUCKET_ID,
      ID.unique(),
      file
    );

    return {
      state: "success",
      data: `https://cloud.appwrite.io/v1/storage/buckets/${
        result.bucketId
      }/files/${result.$id}/view?project=${
        import.meta.env.VITE_APPWRITE_PROJECT_ID
      }`,
    };
  } catch (error) {
    const errorInfo = JSON.parse(JSON.stringify(error));
    console.log(error);
    return {
      state: "failure",
      statusCode: errorInfo.response.code,
      message: errorInfo.response.message,
      type: errorInfo.response.type,
    };
  }
};

export const deleteRecipeImage = async (
  fileURL: any
): Promise<responseInterface<string>> => {
  // Define a regular expression pattern to match the fileId
  const pattern = /\/files\/([^/]+)/;

  // Find the fileId using regular expression matching
  const match = fileURL.match(pattern);

  const fileId = match[1];

  try {
    await storage.deleteFile(
      import.meta.env.VITE_APPWRITE_POST_BUCKET_ID,
      fileId
    );

    return {
      state: "success",
      data: "successfully deleted",
    };
  } catch (error) {
    const errorInfo = JSON.parse(JSON.stringify(error));
    console.log(error);
    return {
      state: "failure",
      statusCode: errorInfo.response.code,
      message: errorInfo.response.message,
      type: errorInfo.response.type,
    };
  }
};

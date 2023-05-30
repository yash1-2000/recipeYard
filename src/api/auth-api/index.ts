import { ID } from "appwrite";
import { account } from "../backend-config/appwrite-config";

export const createUser = async (userCreationData: any): Promise<any> => {
  try {
    const result = await account.create(
      ID.unique(),
      userCreationData.email,
      userCreationData.password,
      userCreationData.name
    );
    console.log(result);
    return {
      state: "success",
      data: result,
      message: "Account created successfully",
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

  // return null;
};

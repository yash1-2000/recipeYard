import { ID } from "appwrite";
import { account } from "../backend-config/appwrite-config";
import { responseInterface } from "../api-utils/response-interface";
import { currentUser, loginState, signupState } from "./auth-interface";
import { responseToUserModel } from "./model";

export const createUser = async (
  userCreationData: signupState
): Promise<responseInterface<undefined>> => {
  try {
    const result = await account.create(
      ID.unique(),
      userCreationData.email,
      userCreationData.password,
      userCreationData.name
    );

    return {
      state: "success",
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
};

export const loginUser = async (
  loginData: loginState
): Promise<responseInterface<undefined>> => {
  try {
    await account.createEmailSession(loginData.email, loginData.password);

    return {
      state: "success",
      message: "Logged in successfully",
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

export const checkUserSession = async (): Promise<
  responseInterface<currentUser>
> => {
  try {
    const accRs = await account.get();
    return {
      state: "success",
      data: responseToUserModel(accRs),
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

export const logoutUser = async (): Promise<responseInterface<undefined>> => {
  try {
    await account.deleteSession("current");
    return {
      state: "success",
      message: "Logged out successfully",
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

import { ID, Models, Permission, Query, Role } from "appwrite";
import { databases } from "../backend-config/appwrite-config";
import { profileData } from "./profile-interface";
import { responseInterface } from "../api-utils/response-interface";

export const createProfile = async (profileData: profileData): Promise<responseInterface<Models.Document>> => {
    try {
        const result = await databases.createDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID, import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID, ID.unique(), profileData,
            [
                Permission.read(Role.any()),
                Permission.update(Role.user(profileData.userId, 'verified')),
                Permission.delete(Role.user(profileData.userId, 'verified'))
            ]
        );
        console.log(result);
        return {
            state: "success",
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

export const getProfileByUserId = async (userId: string): Promise<responseInterface<Models.DocumentList<Models.Document>>> => {
    try {
        const result = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID, import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID,
            [
                Query.equal('userId', userId)
            ]
        );
        console.log(result);
        return {
            state: "success",
            data: result
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

export const updateProfile = async (profileData: profileData, profileId: string): Promise<responseInterface<Models.Document>> => {
    try {
        const result = await databases.updateDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID, import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID,
            profileId, profileData
        );
        console.log(result);
        return {
            state: "success",
            data: result
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
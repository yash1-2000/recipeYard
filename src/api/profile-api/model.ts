import { Models } from "appwrite";
import { profileData } from "./profile-interface";

export const responseToProfileModel = (
  responseData: Models.Document
): profileData | null => {
  return responseData
    ? {
        id: responseData.$id,
        name: responseData.name,
        imageUrl: responseData.imageUrl,
        about: responseData.about,
        email: responseData.email,
        userId: responseData.userId,
        joinedFrom: responseData.joinedFrom,
        linkedin: responseData.linkedin,
        instagram: responseData.instagram,
        twitter: responseData.twitter,
      }
    : null;
};

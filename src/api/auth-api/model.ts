import { Models } from "appwrite";
import { currentUser } from "./auth-interface";

export const responseToUserModel = (responseData: Models.User<Models.Preferences>): currentUser => {
    return {
        id: responseData.$id,
        name: responseData.name,
        email: responseData.email,
    }
}
import { Models } from "appwrite";
import { recipeData } from "./recipe-interface";

export const responseToRecipeModel = (
  responseData: Models.Document
): recipeData => {
  return {
    id: responseData.$id,
    postedBy: responseData.postedBy,
    title: responseData.title,
    description: responseData.description,
    ingredients: responseData.ingredients,
    steps: responseData.steps,
    isEditable: responseData.isEditable,
    isVersion: responseData.isVersion,
    versionOf: responseData.versionOf,
    tags: responseData.tags,
    reactions: responseData.reactions,
    recipeImg: responseData.recipeImg,
    authorName: responseData.authorName,
    postedAt: responseData.postedAt,
    acceptedSuggestion: responseData.acceptedSuggestion,
  };
};

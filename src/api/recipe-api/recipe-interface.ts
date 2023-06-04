// export interface defaultRecipeData {
//   postedBy: string | null;
//   postedById: string | null;
//   title: string | null;
//   description: string | null;
//   ingredients: string | null;
//   steps: string | null;
//   isEditable: boolean;
//   isVersion: boolean;
//   versionOf: string | null;
//   versions: string[] | null;
//   tags: string[] | null;
//   reactions: string[] | null;
//   recipeImg: string | null;
//   authorName: string | null;
//   postedAt: Date | string | null;
//   acceptedSuggestion: string | null;
// }

export interface recipeData {
  id: string;
  postedBy: string | null;
  title: string | null;
  description: string | null;
  ingredients: string | null;
  steps: string | null;
  isEditable: boolean | null;
  isVersion: boolean | null;
  versionOf: string | null;
  tags: string[] | null;
  reactions: string[] | null;
  recipeImg: string | null;
  authorName: string | null;
  postedAt: Date | string | null;
  acceptedSuggestion: string | null;
}

export interface recipeFormData {
  id: string;
  postedBy: string;
  title: string;
  description: string;
  ingredients: string;
  steps: string;
  isEditable: boolean;
  isVersion: boolean;
  versionOf: string;
  tags: string[];
  reactions: string[];
  recipeImg: string;
  authorName: string;
  postedAt: Date | string | null;
  acceptedSuggestion: string;
}

export const getRecipeData = (data: recipeFormData): recipeData => {
  return {
    id: data.id,
    postedBy: data.postedBy === "" ? null : data.postedBy,
    title: data.title === "" ? null : data.title,
    description: data.description === "" ? null : data.description,
    ingredients: data.ingredients === "" ? null : data.ingredients,
    steps: data.steps === "" ? null : data.steps,
    isEditable: data.isEditable,
    isVersion: data.isVersion,
    versionOf: data.versionOf === "" ? null : data.versionOf,
    tags: data.tags.length === 0 ? null : data.tags,
    reactions: data.reactions.length === 0 ? null : data.reactions,
    recipeImg: data.recipeImg === "" ? null : data.recipeImg,
    authorName: data.authorName === "" ? null : data.authorName,
    postedAt: data.postedAt === "" ? null : data.postedAt,
    acceptedSuggestion:
      data.acceptedSuggestion === "" ? null : data.acceptedSuggestion,
  };
};

import { FunctionComponent, useEffect, useState } from "react";
import { useRecipe } from "../../services/recipes/recipe-context";
import { useParams } from "react-router-dom";
import RecipePostView from "../../views/recipeView/recipe-post-view";
import { recipeData } from "../../api/recipe-api/recipe-interface";
import { useProfile } from "../../services/profile/profile-context";
import { profileData } from "../../api/profile-api/profile-interface";
import { format } from "date-fns";
import PostProfileComponent from "../../components/profile-components/post-profile-component";

export const PostProfileView: FunctionComponent<{ userId: string }> = ({
  userId,
}) => {
  const [profile, setProfile] = useState<profileData | null>(null);

  const { getProfile } = useProfile();

  const getProfileData = async () => {
    const result = await getProfile(userId ?? "");
    console.log(result, "nulllll");
    setProfile(result);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return <>{profile ? <PostProfileComponent data={profile} /> : null}</>;
};
export default PostProfileView;

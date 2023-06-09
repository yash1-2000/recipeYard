import { FunctionComponent, useEffect, useState } from "react";
import { useProfile } from "../../services/profile/profile-context";
import { profileData } from "../../api/profile-api/profile-interface";
import PostProfileComponent from "../../components/profile-components/post-profile-component";

export const PostProfileView: FunctionComponent<{ userId: string }> = ({
  userId,
}) => {
  const [profile, setProfile] = useState<profileData | null>(null);

  const { getProfile } = useProfile();

  const getProfileData = async () => {
    const result = await getProfile(userId ?? "");
    setProfile(result);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return <>{profile ? <PostProfileComponent data={profile} /> : null}</>;
};
export default PostProfileView;

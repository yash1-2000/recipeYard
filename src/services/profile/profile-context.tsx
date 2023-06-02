import {
  FunctionComponent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { profileData } from "../../api/profile-api/profile-interface";
import { alertType, useToastContext } from "../alert/alert-context";
import {
  createProfile,
  getProfileByUserId,
  updateProfile,
} from "../../api/profile-api";
import { useAuth } from "../auth/auth-context";

type profileContextProps = {
  createProfileData: () => Promise<void>;
  getCurrentProfileData: () => Promise<void>;
  editProfileData: (data: profileData) => Promise<boolean>;
  currentProfileData: profileData | null;
};

const ProfileContext = createContext<profileContextProps>({
  createProfileData: async () => {},
  getCurrentProfileData: async () => {},
  editProfileData: async () => false,
  currentProfileData: null,
});

export const ProfileDataProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentProfileData, setCurrentProfileData] =
    useState<profileData | null>(null);

  const { currentUser } = useAuth();

  const { addToasts } = useToastContext();

  const getCurrentProfileData = async (): Promise<void> => {
    console.log("before");
    if (currentUser === null) return;
    console.log("cscdssdcs");
    const result = await getProfileByUserId(currentUser.id);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      return;
    } else {
      console.log(result);
      if ("data" in result) {
        setCurrentProfileData(() => result.data ?? null);
      }
      return;
    }
  };

  const editProfileData = async (data: profileData): Promise<boolean> => {
    const result = await updateProfile(data);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      return false;
    } else {
      addToasts(alertType.success, result.message);
      return true;
    }
  };

  const createProfileData = async (): Promise<void> => {
    if (currentUser === null) return;
    const result = await createProfile(currentUser.id);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
    } else {
      if ("data" in result) {
        setCurrentProfileData(() => result.data ?? null);
      }
    }
  };

  useEffect(() => {
    getCurrentProfileData();
  }, [currentUser]);

  useEffect(() => {
    console.log(currentProfileData);
  }, [currentProfileData]);

  return (
    <ProfileContext.Provider
      value={{
        getCurrentProfileData,
        editProfileData,
        currentProfileData,
        createProfileData,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): profileContextProps => useContext(ProfileContext);

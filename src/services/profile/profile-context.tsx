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
  createProfileData: (data: profileData) => Promise<void>;
  getCurrentProfileData: () => Promise<void>;
  getProfile: (userId: string) => Promise<profileData | null>;
  editProfileData: (data: profileData) => Promise<boolean>;
  currentProfileData: profileData | null;
};

const ProfileContext = createContext<profileContextProps>({
  createProfileData: async () => {},
  getCurrentProfileData: async () => {},
  getProfile: async () => null,
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
    if (currentUser === null) return;
    const result = await getProfileByUserId(currentUser.id);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      return;
    } else {
      if ("data" in result) {
        setCurrentProfileData(() => result.data ?? null);
      }
      return;
    }
  };

  const getProfile = async (userId: string): Promise<profileData | null> => {
    const result = await getProfileByUserId(userId);
    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      return null;
    } else {
      if ("data" in result) {
        return result.data ?? null;
      }
      return null;
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

  const createProfileData = async (data: profileData): Promise<void> => {
    if (currentUser === null) return;
    const currDate = new Date();
    data.joinedFrom = currDate.toISOString();
    const result = await createProfile(data);
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

  return (
    <ProfileContext.Provider
      value={{
        getCurrentProfileData,
        getProfile,
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

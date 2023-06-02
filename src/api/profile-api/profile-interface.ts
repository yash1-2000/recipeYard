export interface defaultProfileData {
  name: string | null;
  imageUrl: string | null;
  about: string | null;
  email: string | null;
  userId: string;
  joinedFrom: Date | string | null;
  linkedin: string | null;
  instagram: string | null;
  twitter: string | null;
}

export interface profileData {
  id: string;
  name: string | null;
  imageUrl: string | null;
  about: string | null;
  email: string | null;
  userId: string;
  joinedFrom: Date | string | null;
  linkedin: string | null;
  instagram: string | null;
  twitter: string | null;
}

export const getDefaultProfileData = (userId: string): defaultProfileData => {
  return {
    name: null,
    imageUrl: null,
    about: null,
    email: null,
    userId: userId,
    joinedFrom: null,
    linkedin: null,
    instagram: null,
    twitter: null,
  };
};

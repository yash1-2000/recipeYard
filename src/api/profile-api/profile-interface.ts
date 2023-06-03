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

export interface profileFormData {
  id: string;
  name: string;
  imageUrl: string;
  about: string;
  email: string;
  userId: string;
  joinedFrom: Date | string;
  linkedin: string;
  instagram: string;
  twitter: string;
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

export const getDefaultProfileData2 = (data: profileData): profileData => {
  return {
    id: data.id,
    name: data.name === "" ? null : data.name,
    imageUrl: data.imageUrl === "" ? null : data.imageUrl,
    about: data.about === "" ? null : data.about,
    email: data.email === "" ? null : data.email,
    userId: data.userId,
    joinedFrom: data.joinedFrom === "" ? null : data.joinedFrom,
    linkedin: data.linkedin === "" ? null : data.linkedin,
    instagram: data.instagram === "" ? null : data.instagram,
    twitter: data.twitter === "" ? null : data.twitter,
  };
};

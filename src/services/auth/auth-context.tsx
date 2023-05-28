import { createContext, FunctionComponent, useContext, useState } from "react";
import { Client, Account, ID } from "appwrite";
export enum themeType {
  default = "DEFAULT",
  healthy = "HEALTHY",
  fastfood = "FASTFOOD",
  gourmet = "GOURMET",
}

type authContextProps = {
  theme: themeType;
  updateTheme: (val: themeType) => void;
  createAcc: () => void;
};

const AuthContext = createContext<authContextProps>({
  theme: themeType.default,
  updateTheme: () => {},
  createAcc: () => {},
});

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your project ID

const account = new Account(client);

const createAcc = () => {
  console.log("kklkl");
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
};

export const AuthDataProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState(themeType.default);

  const updateTheme = (themeType: themeType) => {
    console.log("lll");
    return setTheme(() => themeType);
  };

  return (
    <AuthContext.Provider value={{ theme, updateTheme, createAcc }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): authContextProps => useContext(AuthContext);

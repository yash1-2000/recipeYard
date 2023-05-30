import { createContext, FunctionComponent, useContext, useState } from "react";
import { Client, Account, ID } from "appwrite";
import { createUser } from "../../api/auth-api";
import { alertType, useToastContext } from "../alert/alert-context";
import { signupState } from "./auth-types";
export enum themeType {
  default = "DEFAULT",
  healthy = "HEALTHY",
  fastfood = "FASTFOOD",
  gourmet = "GOURMET",
}

type authContextProps = {
  theme: themeType;
  updateTheme: (val: themeType) => void;
  createAcc: (data: signupState) => void;
};

const AuthContext = createContext<authContextProps>({
  theme: themeType.default,
  updateTheme: () => {},
  createAcc: () => {},
});

export const AuthDataProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState(themeType.default);
  const { addToasts } = useToastContext();

  const updateTheme = (themeType: themeType) => {
    console.log("lll");
    return setTheme(() => themeType);
  };
  const createAcc = async (data: signupState) => {
    const result = await createUser(data);

    if (result.state === "failure") {
      return addToasts(alertType.error, result.message);
    } else {
      return addToasts(alertType.success, result.message);
    }
    // addToasts()
  };
  return (
    <AuthContext.Provider value={{ theme, updateTheme, createAcc }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): authContextProps => useContext(AuthContext);

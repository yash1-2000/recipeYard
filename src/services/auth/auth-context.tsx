import { createContext, FunctionComponent, useContext, useState, useEffect } from "react";
import { checkUserSession, createUser, loginUser, logoutUser } from "../../api/auth-api";
import { alertType, useToastContext } from "../alert/alert-context";
import { currentUser, loginState, signupState } from "../../api/auth-api/auth-interface";
import { successInterface } from "../../api/api-utils/response-interface";

type authContextProps = {
  createAcc: any
  loginFunction: any
  logoutFunction: any
  currentUser: currentUser | null
};

const AuthContext = createContext<authContextProps>({
  createAcc: () => { },
  loginFunction: () => { },
  logoutFunction: () => { },
  currentUser: null
});

export const AuthDataProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {

  // const [currentUser, setCurrentUser] = useState<currentUser | null>(null)
  const [currentUser, setCurrentUser] = useState<currentUser | null>(null)

  const { addToasts } = useToastContext();

  const createAcc = async (data: signupState): Promise<boolean> => {
    const result = await createUser(data);

    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      return false
    } else {
      addToasts(alertType.success, result.message);
      return true
    }
  };

  const loginFunction = async (data: loginState): Promise<boolean> => {
    const result = await loginUser(data);

    if (result.state === "failure") {
      addToasts(alertType.error, result.message);
      console.log(result);
      return false
    } else {
      addToasts(alertType.success, result.message);
      getCurrentUserData();
      return true
    }
  };

  const logoutFunction = async (): Promise<void> => {
    logoutUser();
    setCurrentUser(null)
    return
  };

  const getCurrentUserData = async (): Promise<void> => {
    const result = await checkUserSession();
    if (result.state === "failure") {
      return
    } else {
      if ('data' in result) {
        setCurrentUser(() => result.data ?? null)
      }
      return
    }
  }

  useEffect(() => {
    getCurrentUserData()
  }, [])
  return (
    <AuthContext.Provider value={{ createAcc, loginFunction, logoutFunction, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): authContextProps => useContext(AuthContext);

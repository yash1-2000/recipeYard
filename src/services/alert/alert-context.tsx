import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import AlertComponent from "../../components/alert-component";

export const ADD = "ADD";
export const REMOVE = "REMOVE";

export enum alertType {
  success = "SUCCESS",
  info = "INFO",
  warning = "WARNING",
  error = "ERROR",
}

export type toasterData = {
  id: string;
  message: string;
  type: alertType;
};

type toastStateType = {
  toasts: toasterData[];
  addToasts: (type: alertType, message: string) => void;
};

const initialState: toasterData[] = [];

export const ToastContext = createContext<toastStateType>({
  toasts: [],
  addToasts: () => {},
});

export const ToastProvider: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  //   const [toast, toastDispatch] = useReducer(toastReducer, initialState);
  const [toasts, setToasts] = useState<toasterData[]>(initialState);
  //   const toastData: toastStateType[] = { toast, toastDispatch };
  const addToasts = (type: alertType, message: string): void => {
    const toastId = Date.now().toString();
    setToasts((prev: toasterData[]) => [
      ...prev,
      { id: toastId, type: type, message: message },
    ]);

    setTimeout(() => {
      removeToasts(toastId);
    }, 5000);
  };

  const removeToasts = (id: string): void => {
    setToasts((prev: toasterData[]) =>
      prev.filter((t: toasterData) => t.id !== id)
    );
  };
  return (
    <ToastContext.Provider value={{ toasts, addToasts }}>
      {children}

      {createPortal(<AlertComponent toasts={toasts} />, document.body)}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  return useContext(ToastContext);
};

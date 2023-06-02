import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthDataProvider } from "./services/auth/auth-context.tsx";
import { ToastProvider } from "./services/alert/alert-context.tsx";
import { ProfileDataProvider } from "./services/profile/profile-context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthDataProvider>
        <ProfileDataProvider>
          <App />
        </ProfileDataProvider>
      </AuthDataProvider>
    </ToastProvider>
  </React.StrictMode>
);

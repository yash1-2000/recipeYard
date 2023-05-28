import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthDataProvider } from "./services/auth/auth-context.tsx";
import { ToastProvider } from "./services/alert/alert-context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthDataProvider>
        <App />
      </AuthDataProvider>
    </ToastProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthDataProvider } from "./services/theme/auth-context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthDataProvider>
      <App />
    </AuthDataProvider>
  </React.StrictMode>
);

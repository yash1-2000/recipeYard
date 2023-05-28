import "./App.css";
import NavbarComponent from "./components/navbar-component";
import { alertType, useToastContext } from "./services/alert/alert-context";
import { useAuth } from "./services/auth/auth-context";

function App() {
  return (
    <>
      <NavbarComponent />
    </>
  );
}

export default App;

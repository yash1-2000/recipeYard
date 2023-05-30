import "./App.css";
import NavbarComponent from "./components/navbar-component";
import { alertType, useToastContext } from "./services/alert/alert-context";
import { useAuth } from "./services/auth/auth-context";
import Profile from "./views/profileview";

function App() {
  const { createAcc } = useAuth();
  return (
    <>
      <NavbarComponent />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Profile /> */}
      {/* <button onClick={createAcc}>create acc</button> */}
    </>
  );
}

export default App;

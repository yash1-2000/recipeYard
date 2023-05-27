import "./App.css";
import NavbarComponent from "./components/navbar-component";
import { useAuth } from "./services/theme/auth-context";

function App() {
  const { createAcc } = useAuth();
  return (
    <>
      <NavbarComponent />
      <button onClick={() => createAcc()}>createAccount</button>
    </>
  );
}

export default App;

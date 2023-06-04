import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar-component";
import Profile from "./views/profileview";
import PrivateRoutes from "./views/private-routes";
import { HomePage } from "./views/home";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/home" />
            <Route element={<Profile />} path="/profile" />
            {/* <Route element={<Products />} path="/products" /> */}
          </Route>
          {/* <Route element={<Profile />} path="/" /> */}
          <Route element={<h1>mkcmlkds</h1>} path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;

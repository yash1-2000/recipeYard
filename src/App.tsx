import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar-component";
import Profile from "./views/profileview";
import PrivateRoutes from "./views/private-routes";
import { HomePage } from "./views/home";
import RecipeListPage from "./pages/recipes/recipe-list-page.tsx";
import RecipeViewSelf from "./pages/recipes/recipe-view-self.tsx";
import RecipeView from "./pages/recipes/recipe-view-page.tsx";
import Recipes from "./pages/recipes/recipes.tsx";
import LandingPage from "./pages/landing/landing-page.tsx";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/home" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<RecipeListPage />} path="/recipes-view" />
            <Route
              element={<RecipeViewSelf />}
              path="/recipes-view-self/:recipeId"
            />
            {/* <Route element={<Products />} path="/products" /> */}
          </Route>
          {/* <Route element={<Profile />} path="/" /> */}
          <Route element={<LandingPage />} path="/" />
          <Route element={<RecipeView />} path="/recipes-view/:recipeId" />
          <Route element={<Recipes />} path="/recipes" />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar-component";
import Profile from "./views/profileview";
import PrivateRoutes from "./views/private-routes";
import { HomePage } from "./views/home";
import RecipeListPage from "./pages/recipes/recipe-list-page.tsx";
import RecipeViewSelf from "./pages/recipes/authenticated-recipe-view-page.tsx";
import RecipeView from "./pages/recipes/public-recipe-view-page.tsx";
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
            <Route element={<RecipeListPage />} path="/private-recipes-view" />
            <Route
              element={<RecipeViewSelf />}
              path="/recipe-self/:recipeId"
            />
            {/* <Route element={<Products />} path="/products" /> */}
          </Route>
          {/* <Route element={<Profile />} path="/" /> */}
          <Route element={<LandingPage />} path="/" />
          <Route element={<RecipeView />} path="/recipe/:recipeId" />
          <Route element={<Recipes />} path="/public-recipes-view" />
        </Routes>
      </Router>
    </>
  );
}

export default App;

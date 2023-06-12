import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar-component";
import Profile from "./views/profileview";
import PrivateRoutes from "./views/private-routes";
import { HomePage } from "./views/home";
import RecipeViewSelf from "./pages/recipes/recipe-page.tsx";
import LandingPage from "./pages/landing/landing-page.tsx";
import PrivateRecipeListPage from "./pages/recipes/private-recipe-list-page.tsx";
import RecipeViewPublic from "./pages/recipes/recipe-page-public.tsx";
import PublicRecipeListPage from "./pages/recipes/public-recipe-list-page.tsx";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/home" />
            <Route element={<Profile />} path="/profile" />
            <Route
              element={<PrivateRecipeListPage />}
              path="/private-recipes-view"
            />
            <Route element={<RecipeViewSelf />} path="/recipe-self/:recipeId" />
          </Route>
          <Route element={<LandingPage />} path="/" />
          <Route element={<RecipeViewPublic />} path="/recipe-public/:recipeId" />
          <Route
            element={<PublicRecipeListPage />}
            path="/public-recipes-view/:tabNo?"
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

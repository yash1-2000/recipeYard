import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../services/auth/auth-context";
import LoaderComponent from "../../components/loader-component";

const PrivateRoutes = () => {
  const { currentUser, loading } = useAuth();

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return loading ? (
    <LoaderComponent />
  ) : currentUser !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes;

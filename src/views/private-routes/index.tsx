import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../services/auth/auth-context";

const PrivateRoutes = () => {
  const { currentUser, loading } = useAuth();

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return loading ? (
    <h1>loading</h1>
  ) : currentUser !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes;

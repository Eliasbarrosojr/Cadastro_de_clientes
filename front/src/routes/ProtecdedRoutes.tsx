import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../providers/LoginProvider";

export const ProtectedRoutes = () => {
  const { loading } = useContext(LoginContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return <Outlet />;
};

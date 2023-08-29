import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoutes } from "./PRotecdedRoutes";

export const RoutesAll = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

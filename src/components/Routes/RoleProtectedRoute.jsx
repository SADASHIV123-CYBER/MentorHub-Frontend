
import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/context";

function RoleProtectedRoute({ children, allowedRoles }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" />;

  if ( !user.role || !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RoleProtectedRoute;

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../context/AuthContext.jsx" 

const ProtectedAdminAuth= ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default ProtectedAdminAuth;

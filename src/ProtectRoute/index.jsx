import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../conteks";

const ProtectRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  if (!isLoggedIn) return <Navigate to="/login" />;

  return children;
};

export default ProtectRoute;

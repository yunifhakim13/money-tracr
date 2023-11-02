import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

function ProtectedRoute({ element }) {
  const { user } = getAuth();

  const isAuthenticated = user !== null;

  return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../conteks";

const PrivateRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login");
  }
};

export default PrivateRoute;

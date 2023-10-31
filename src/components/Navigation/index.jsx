import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import "./Navigation.css";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.js";

const Navigation = () => {
  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out success");
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <nav className="container-fluid parNav navbar py-2">
        <div className="parLogo container-fluid">
          <Logo />
          <div className="d-flex gap-2 nav-item" role="search">
            <button onClick={userSignOut} className="btn style-logout">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

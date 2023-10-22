import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../Logo";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="container-fluid parNav navbar py-2">
        <div className="parLogo container-fluid">
          <Logo />
          <div className="d-flex gap-2 nav-item" role="search">
            <Link to="/" className="btn style-logout">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

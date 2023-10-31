import BtnBorder from "../BtnBorder";
import Button from "../Button";
import Logo from "../Logo";
import "./NavDash.css";

const NavDashboard = () => {
  return (
    <>
      <nav className="container-fluid parNav navbar py-2">
        <div className="parLogo container-fluid">
          <Logo />
          <div className="d-flex gap-2 nav-item" role="search">
            <Button>{"Login"}</Button>
            <BtnBorder>{"Register"}</BtnBorder>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavDashboard;

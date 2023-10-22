import "../../index.css";
import "./Login.css";
import NavDashboard from "../../components/NavDashboard";
import RightImg from "../../assets/Account.svg";
import BtnBorder from "../../components/BtnBorder";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  return (
    <>
      <NavDashboard />
      <div className="container d-flex gap-5 parLogin">
        <div>
          <img className="rightImg" src={RightImg} alt="heroLeft" />
        </div>
        <div className="wrapLogin rounded shadow text-white">
          <h1 className="text-center pt-5 pb-3">Login Account</h1>
          <form className="px-5">
            <div className="pb-3">
              <label htmlFor="Email">Email</label>
              <input
                className="form-control "
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label htmlFor="Password">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="text-center pt-3">
              <Link
                to="/dashboard"
                className="btnLogin btn btn-outline-light justify-item-center">
                Login
              </Link>
              <p className="pt-2">
                Don't have an account?
                <Link to="/register" className="btnBackHome">
                  Register Now.
                </Link>
              </p>
              <Link to="/" className="btnBackHome">
                Back to home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

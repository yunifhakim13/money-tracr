import "../../index.css";
import "./Register.css";
import NavDashboard from "../../components/NavDashboard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Register = () => {
  return (
    <>
      <NavDashboard />
      <section className="sec-reg">
        <div className="parRegister shadow rounded text-white">
          <div className="py-5 px-5">
            <h1 className="text-center pb-3">Register New Account</h1>
            <form>
              <div className="mod-input">
                <label htmlFor="FullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input your fullname"
                />
              </div>
              <div className="py-2 mod-input ">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mod-input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password minimum 8 character"
                />
              </div>
              <div className="text-center pt-3">
                <Link to="/login" className="bt-reg btn btn-outline-light">
                  Register
                </Link>
                <br />
                <div className="py-3">
                  <Link to="/" className="reg-to-home text-white">
                    Back to home
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

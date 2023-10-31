import "../../index.css";
import "./Register.css";
import NavDashboard from "../../components/NavDashboard";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password harus memiliki minimal 8 karakter.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <NavDashboard />
      <section className="sec-reg">
        <div className="parRegister shadow rounded text-white">
          <div className="py-5 px-5">
            <h1 className="text-center pb-3">Register New Account</h1>
            <form onSubmit={handleRegister}>
              <Input
                parentInput={"text-white pb-3"}
                className={"form-control px-1"}
                children={"Username"}
                type={"text"}
                placeholder={"Username"}
                name={"name"}
              />
              <Input
                parentInput={"text-white pb-3"}
                className={"form-control px-1"}
                children={"Email"}
                type={"email"}
                placeholder={"example@gmail.com"}
                name={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                parentInput={"text-white pb-3"}
                className={"form-control px-1"}
                children={"Password"}
                type={"password"}
                placeholder={"minimum 8 character"}
                name={"password"}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
              {error && (
                <div className="error-message text-center text-danger">
                  {error}
                </div>
              )}
              <div className="text-center pt-3">
                <button
                  type="submit"
                  className="bt-reg btn btn-outline-light"
                  onClick={handleRegister}>
                  Register
                </button>
                <br />
                <div className="py-3">
                  <Link to="/login" className="reg-to-home text-white">
                    Already have an account
                  </Link>
                  <div>
                    <span> or </span>
                    <Link to="/" className="reg-to-home text-white">
                      Back to home
                    </Link>
                  </div>
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

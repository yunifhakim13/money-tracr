import "../../index.css";
import "./Register.css";
import NavDashboard from "../../components/NavDashboard";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import Input from "../../components/Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        history.push("/login");
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
                children={"Username"}
                type={"text"}
                placeholder={"Username"}
                name={"name"}
              />
              <Input
                children={"Email"}
                type={"email"}
                placeholder={"example@gmail.com"}
                name={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                children={"Password"}
                type={"password"}
                placeholder={"minimum 8 character"}
                name={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-center pt-3">
                <button type="submit" className="bt-reg btn btn-outline-light">
                  Register
                </button>
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

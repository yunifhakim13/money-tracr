import "../../index.css";
import "./Login.css";
import NavDashboard from "../../components/NavDashboard";
import RightImg from "../../assets/Account.svg";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../components/Input";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      history.push("/dashboard");
    }
  }, [history]);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        history.push("/dashboard");
      })
      .catch((error) => {
        console.error(error);
        setError("Invalid email or password."); // Provide user-friendly error message
      });
  };

  return (
    <>
      <NavDashboard />
      <div className="container d-flex gap-5 parLogin">
        <div>
          <img className="rightImg" src={RightImg} alt="heroLeft" />
        </div>
        <div className="wrapLogin rounded shadow text-white">
          <h1 className="text-center pt-5 pb-3">Login Account</h1>
          <form className="px-5" onSubmit={handleLogin}>
            <Input
              children={"Email"}
              type={"email"}
              name={"email"}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"example@gmail.com"}
            />
            <Input
              children={"Password"}
              type={"password"}
              name={"password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"password"}
            />
            <div className="text-center pt-3">
              <button
                className="btnLogin btn btn-outline-light justify-item-center"
                type="submit">
                Login
              </button>
              <p className="pt-2">
                Don't have an account?
                <Link to="/register" className="btnBackHome">
                  Create an account.
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

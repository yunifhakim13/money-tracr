import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ children }) {
  return (
    <Link to="/login" className="btn py-2 px-5 login">
      {children}
    </Link>
  );
}

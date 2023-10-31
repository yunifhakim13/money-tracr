import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ children, type }) {
  return (
    <Link to="/login" className="btn py-2 px-5 login" type={type}>
      {children}
    </Link>
  );
}

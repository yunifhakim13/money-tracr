import { Link } from "react-router-dom";
import "./BtnBorder.css";

export default function BtnBorder({ children }) {
  return (
    <Link
      to="/register"
      className={` btn btn-success ${
        children === "Register" ? "btnBorder" : "btnBorder-lg"
      }`}>
      {children}
    </Link>
  );
}

import "../../index.css";
import RightImg from "../../assets/Account.svg";
import BtnBorder from "../BtnBorder";
import { Link } from "react-router-dom";
import "./Hero.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero container d-flex py-5">
        <div className="pt-5 px-5">
          <h1 className="py-3 title-hero">
            Simplify <br />
            Your Expense, With Money
            <span className="span">Trackr.</span>
          </h1>
          <p className="py-3 paragraph-hero">
            We provide what you need to manage your finance. Time to make
            complete <br /> and simple expense in your life.
          </p>
          <BtnBorder>{"Get Started"}</BtnBorder>
          <Link className="btn py-2 px-5 chatai" to="/chatai">
            Chat Bot
          </Link>
        </div>
        <div className="container py-4 img-format">
          <img src={RightImg} alt="HeroRight" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;

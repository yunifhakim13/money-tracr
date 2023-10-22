import "../../index.css";
import RightImg from "../../assets/Account.svg";
import BtnBorder from "../BtnBorder";

const HeroSection = () => {
  return (
    <>
      <div className="hero container d-flex py-5">
        <div className="pt-5 px-5">
          <h1
            className="py-3"
            style={{
              color: "#618264",
              fontSize: "70px",
              fontWeight: "600",
              maxWidth: "750px",
            }}>
            Simplify <br />
            Your Expense, With Money
            <span style={{ color: "#186F65" }}>Trackr.</span>
          </h1>
          <p
            className="py-3"
            style={{
              color: "#B0B0B0",
              fontSize: "16px",
              fontWeight: "400",
              maxWidth: "680px",
            }}>
            We provide what you need to manage your finance. Time to make
            complete <br /> and simple expense in your life.
          </p>
          <BtnBorder>{"Get Started"}</BtnBorder>
        </div>
        <div
          className="container py-4"
          style={{ width: "600px", height: "600px" }}>
          <img src={RightImg} alt="HeroRight" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;

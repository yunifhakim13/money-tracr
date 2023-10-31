import "../../index.css";
import "../CardSection/Card.css";
import Plus from "../../assets/Plus.svg";
import EditSquare from "../../assets/EditSquare.svg";
import Chart from "../../assets/Chart.svg";
import Button from "../Button";
import BtnBorder from "../BtnBorder";

const CardSection = () => {
  return (
    <>
      <div className="parentCard container-fluid text-center position-relative">
        <h1
          className="pt-5"
          style={{
            color: "#FFF",
            fontSize: "42px",
            fontWeight: "600",
          }}>
          Money
          <span style={{ color: "#186F65" }}>Trackr.</span>
          <br /> Featured
        </h1>
        <p
          className="pt-3"
          style={{ fontSize: "16px", fontWeight: "400px", color: "#FFF" }}>
          We provide three main features to manage your finance.
        </p>
      </div>
      <section className="container">
        <div className="abs-card d-flex gap-5 position-absolute">
          <div className="card lay-card shadow border border-light">
            <div className="card-body py-5 px-5">
              <img className="py-3" src={Plus} alt="iconPlus" />
              <h5 className="lay-title card-title">
                Create <br /> Transaction
              </h5>
              <p className="lay-text card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Augue orci.
              </p>
            </div>
          </div>
          <div className="card lay-card shadow border border-light">
            <div className="card-body py-5 px-5">
              <img className="py-3" src={EditSquare} alt="iconEdit" />
              <h5 className="lay-title card-title">
                Edit and Delete <br /> Transaction
              </h5>
              <p className="lay-text card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Augue orci.
              </p>
            </div>
          </div>
          <div className="card lay-card shadow border border-light">
            <div className="card-body py-5 px-5">
              <img className="py-3" src={Chart} alt="iconChart" />
              <h5 className="lay-title card-title">
                Recap <br /> Transaction
              </h5>
              <p className="lay-text card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Augue orci.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="deskPar container d-flex">
        <div className="desk">
          <h1>
            Get ready to manage <br /> your expense?
          </h1>
        </div>
        <div className="deskBtn">
          <BtnBorder>{"Start Now"}</BtnBorder>
          <Button>{"Register Now"}</Button>
        </div>
      </section>
      <div className="bottomDesk container-fluid"></div>
    </>
  );
};

export default CardSection;

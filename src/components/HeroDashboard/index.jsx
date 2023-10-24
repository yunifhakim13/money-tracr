import "../../index.css";
import "./HeroDash.css";
import Wallet from "../../assets/Wallet.svg";
import Earning from "../../assets/Earning.svg";
import Spending from "../../assets/Spending.svg";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase.js";

const HeroDashboard = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <>
      <div className="container-fluid parent-dashboard position-relative">
        <div className="container child-dashboard">
          {authUser && (
            <h1 className="title-dashboard text-white">
              Hello, {authUser.email}
            </h1>
          )}
          <p className="text-dashboard text-white">Transaction Info</p>
        </div>
      </div>
      <section className="container">
        <div className="parent-card d-flex gap-5 position-absolute">
          <div className="card rounded shadow child-card border-light">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <img src={Wallet} alt="walletIcon" />
                <span className="ps-3 text-card">Balence</span>
              </div>
              <div className="card-title pt-2">
                <h1>Rp 9.0000.000,00</h1>
              </div>
            </div>
          </div>
          <div className="card rounded shadow d-flex child-card border-light mx-4">
            <div className="card-body px-5 py-4">
              <div className="d-flex align-items-center">
                <img src={Earning} alt="walletIcon" />
                <div className="card-title d-flex flex-column">
                  <p className="child-title">Earning</p>
                  <h1 className="title-flow">Rp 9.000.000,00</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded shadow d-flex child-card border-light">
            <div className="card-body px-5 py-4">
              <div className="d-flex align-items-center">
                <img src={Spending} alt="walletIcon" />
                <div className="card-title d-flex flex-column">
                  <p className="child-title">Spending</p>
                  <h1 className="title-flow">Rp 9.000.000,00</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroDashboard;

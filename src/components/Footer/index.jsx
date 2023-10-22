import "./Footer.css";
import Logo from "../Logo";

const Footer = () => {
  return (
    <>
      <section className="container-fluid d-flex pt-3">
        <div className="parFooter">
          <Logo />
        </div>
        <div>
          <h5 className="titleFooter pb-3">Social Media</h5>
          <ul className="sosmed list-unstyled">
            <li>Whatsapp</li>
            <li className="py-2">Instagram</li>
            <li>Github</li>
          </ul>
        </div>
        <div className="textFooter">
          <h5 className="titleFooter pb-3">Contact Us</h5>
          <ul className="sosmed list-unstyled">
            <li>yunifhakim@gmail.com</li>
            <li className="py-2">+6285-6476-73469</li>
            <li>Magelang, Central Java, Indonesian</li>
          </ul>
        </div>
      </section>
      <section className="bottomFooter container text-center">
        <p className="mb-1">
          Copyright 2023 • All rights reserved • MoneyTrackr.
        </p>
        <p>Website create using ReactJS by @yunif_hakim</p>
      </section>
    </>
  );
};

export default Footer;

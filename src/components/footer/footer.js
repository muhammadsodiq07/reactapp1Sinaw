import React from "react";
import "./footer.css";
import imglog from "../../imgs/logo.svg"

const Footer = () => {
  return (
    <section className="fotter-section">
      <footer className="footer">
        <div className="container">
          <div className="main-footer-div">
            <div className="logo-footer">
              <a href="#">
                <img src={imglog} alt />
              </a>
              <p className="footer-text">
                Any feedback or questions?Contact us on our social media
              </p>
              <div className="icons">
                <a href="#">
                  <i className="ins bx bxl-facebook" />
                </a>
                <a href="#">
                  <i className="ins bx bxl-twitter" />
                </a>
                <a href="#">
                  <i className="ins bx bxl-instagram" />
                </a>
              </div>
            </div>
            <ul className="footer-ul">
              <li className="footer-list">
                <a className="footer-link" href="#">
                  <h4 className="footer-h4">Menu</h4>
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Home
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Courses
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Webinar
                </a>
              </li>
            </ul>
            <ul className="footer-ul">
              <li className="footer-list">
                <a className="footer-link" href="#">
                  <h4 className="footer-h4">Services</h4>
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Materials Update
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Trusted Mentor
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Free E-book
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Meeting
                </a>
              </li>
            </ul>
            <ul className="footer-ul">
              <li className="footer-list">
                <a className="footer-link" href="#">
                  <h4 className="footer-h4">Further Information</h4>
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className="footer-ul">
              <li className="footer-list">
                <a className="footer-link" href="#">
                  <h4 className="footer-h4">Apps Download</h4>
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  Google Play Store
                </a>
              </li>
              <li className="footer-list">
                <a className="footer-link" href="#">
                  App Store
                </a>
              </li>
            </ul>
          </div>
          <p className="footer-last">
            Copyright@2021 Sinauw. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

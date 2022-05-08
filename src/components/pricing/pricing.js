import React from "react";
import "./pricing.css";
import star from "../../imgs/star 1.png";
import linegreen from "../../imgs/line-green.png";
import backcolor from "../../imgs/backround-color.png";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="course">
          <h3 className="course-title">Course Pricing</h3>
          <p className="course-text">Choose pricing that suits to your need.</p>
        </div>
        <ul className="priciing">
          <li className="priccing-list">
            <div className="priicing-box">
              <div className="star">
                <img className="starimg" src={linegreen} alt />
                <img className="star-img" src={star} alt />
                <div className="free-div">
                  <h4 className="free">Free</h4>
                  <span className="dollar">$</span>
                  <span className="nol">0</span>
                  <p className="month">/ month</p>
                </div>
              </div>
              <div className="ball-div">
                <p className="ball">Free e-book for every class</p>
                <p className="ball">Free e-book for every class</p>
                <p className="ball">Free e-book for every class</p>
                <p className="ball maaa">Free e-book for every class</p>
              </div>
            </div>
            <a className="your-button btn" href="#">
              Your Current Package
            </a>
          </li>
          <li className="priccing-list">
            <div className="priicing-box">
              <div className="star">
                <img className="starimg" src={linegreen} alt />
                <img className="star-img" src={star} alt />
                <div className="free-div">
                  <h4 className="free">Express</h4>
                  <span className="dollar">$</span>
                  <span className="nol">7</span>
                  <p className="month">/ month</p>
                </div>
              </div>
              <div className="ball-div">
                <p className="ball">Free e-book for every class</p>
                <p className="ball">Free e-book for every class</p>
                <p className="ball">Free e-book for every class</p>
                <p className="ball maaa">Free e-book for every class</p>
              </div>
            </div>
            <a className="your-button btn" href="#">
              Your Current Package
            </a>
          </li>
          <li className="priccing-list">
            <div className="red-back">
              <span className="popular">Popular</span>
              <img src={backcolor} alt />
            </div>
            <div className="priicing-box">
              <div className="star">
                <img className="starimg" src={linegreen} alt />
                <img className="star-img" src={star} alt />
                <div className="free-div">
                  <h4 className="free">Premium</h4>
                  <span className="dollar">$</span>
                  <span className="nol">0</span>
                  <p className="month">/ month</p>
                </div>
              </div>
              <div className="ball-div">
                <p className="ball">Free e-book for every class</p>
                <p className="ball">Free e-book for every class</p>
                <p className="ball">Free e-book for every class</p>
                <p className="ball maaa">Free e-book for every class</p>
                <p className="ball">Free e-book for every class</p>
                <p className="ball maaa">Free e-book for every class</p>
              </div>
            </div>
            <a className="your-button btn mameme" href="#">
              Your Current Package
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pricing;

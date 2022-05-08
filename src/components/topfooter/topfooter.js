import React from "react";
import "./topfooter.css";
import box from "../../imgs/box.png";
import google from "../../imgs/google.png";
import apple from "../../imgs/apple.png";

const Topfooter = () => {
  return (
    <section className="apps">
      <div className="container">
        <div className="get-our-div">
          <div className="now-apps row between">
            <div className="title-apps">
              <h3 className="apps-h3">Get Our Apps, Now!</h3>
              <p className="app-text">
                Reach out our apps everywhere and everytime with Sinauw Mobile
                Application.
              </p>
              <div className="link-goole row middle">
                <img className="app-gogle" src={google} alt />
                <img src={apple} alt />
              </div>
            </div>
            <div className="main-greadit">
              <img src={box} alt />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topfooter;

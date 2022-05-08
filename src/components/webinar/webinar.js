import React from "react";
import "./webinar.css";
import leftimg from "../../imgs/leftcom.png";
import righttimg from "../../imgs/rightcom.png";

const Webinar = () => {
  return (
    <section className="live-online">
      <div className="container">
        <div className="webinar">
          <h3 className="live-title">Live Online Webinar</h3>
          <p className="live-text">
            You can stream Webinar live on our apps. Stay update on our Webinar,
            it’s Free!
          </p>
        </div>
        <div className="youtube">
          <iframe
            className="ifare"
            width={560}
            height={315}
            src="https://www.youtube.com/embed/wPqzP-5lAgk"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <img className="laptop" src={righttimg} alt />
          <img className="laptop2" src={leftimg} alt />
        </div>
        <p className="see-more-video">
          See more webinar videos <i className="bx bx-right-arrow-alt" />
        </p>
      </div>
    </section>
  );
};

export default Webinar;

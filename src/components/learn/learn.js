import React from 'react';
import "./learn.css";
import userd from "../../imgs/userd.png"

const Learn = () => {
  return (
   <div>
  <section className="main-section">
    <div className="container">
      <div className="want-div">
        <h2 className="want-title">What Do You Want to Learn?</h2>
        <p className="want-text">Choose the right class as you need. Then enjoy studying.</p>
      </div>
      <div className="box-coputer">
        <ul className="laptop-ul">
          <li className="laptop-list">
            <div className="tech-div-it">
              <h4 className="tech-title">Technology</h4>
              <p className="tech-text">Digital Marketing Strategy</p>
              <p className="tech-text2">This course aims to give you deeper understanding of core processes ...</p>
              <div className="box-img-doc row">
                <img className="imgusers" src={userd} alt />
                <div className="margin-left">
                  <p className="joye-name">Joey Piere</p>
                  <p className="menor">Mentor</p>
                </div>
                <button className="btn class absalut">Access Class</button>
              </div>
            </div>
          </li>
          <li className="laptop-list2">
            <div className="tech-div-it">
              <h4 className="tech-title aa">Technology</h4>
              <p className="tech-text">Digital Marketing Strategy</p>
              <p className="tech-text2">This course aims to give you deeper understanding of core processes ...</p>
              <div className="box-img-doc row">
                <img className="imgusers" src={userd} alt />
                <div className="margin-left">
                  <p className="joye-name">Joey Piere</p>
                  <p className="menor">Mentor</p>
                </div>
                <div className="button-hover">
                  <button className="btn class absalut">Access Class</button>
                </div>
              </div>
            </div>
          </li>
          <li className="laptop-list2">
            <div className="tech-div-it">
              <h4 className="tech-title bb">Technology</h4>
              <p className="tech-text">Digital Marketing Strategy</p>
              <p className="tech-text2">This course aims to give you deeper understanding of core processes ...</p>
              <div className="box-img-doc row">
                <img className="imgusers" src={userd} alt />
                <div className="margin-left">
                  <p className="joye-name">Joey Piere</p>
                  <p className="menor">Mentor</p>
                </div>
                <div className="button-hover">
                  <button className="btn class absalut">Access Class</button>
                </div>
              </div>
            </div>
          </li>
          <li className="laptop-list2">
            <div className="tech-div-it">
              <h4 className="tech-title cc">Technology</h4>
              <p className="tech-text">Digital Marketing Strategy</p>
              <p className="tech-text2">This course aims to give you deeper understanding of core processes ...</p>
              <div className="box-img-doc row">
                <img className="imgusers" src={userd} alt />
                <div className="margin-left">
                  <p className="joye-name">Joey Piere</p>
                  <p className="menor">Mentor</p>
                </div>
                <div className="button-hover">
                  <button className="btn class absalut">Access Class</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <a className="btn show-all" href="#">Show All Classes</a>
      </div> 
    </div>
  </section>
</div>
  );
}

export default Learn;

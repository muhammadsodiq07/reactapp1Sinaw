import React from "react";
import "./header.css";
import imglog from "../../imgs/logo.svg"

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__main">
          <div className="header__logo-div">
            <a href="#">
              <img className="logoimg" 
              src= {imglog} 
              alt="" />
            </a>
          <ul className="header__list list">
            <li className="list__item">
              <a className="list__link activeHome" href="#">Home</a>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">Courses</a>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">Webinar</a>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">Pricing</a>
            </li>
          </ul>
          </div>
          <div className="header__right">
              <select className="header__select1">
                  <option className="header__select" value="Eng" key="">Eng</option>
                  <option className="header__select" value="Eng" key="">Uzb</option>
                  <option className="header__select" value="Eng" key="">Rus</option>
              </select>
              <button className="header__btn btn">
                  Login
              </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

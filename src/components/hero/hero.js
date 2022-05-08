import React from "react";
import "./hero.css";
import herogirl from "../../imgs/hero.png";
import herouser from "../../imgs/herousers.png";
import rightbook from "../../imgs/animation-book.png"
import lamp from "../../imgs/lamp.svg"
import animation from "../../imgs/righ.png"
import book from "../../imgs/book.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__main">
          <div className="hero__img-div">
            <img src={herogirl} alt="" width="710" height="750" />
            <div className="hero__users">
              <img
                className="hero__pic"
                src={herouser}
                alt="user"
                width="350"
                height="90"
              />
            </div>
            <div>
              <div className="animation-div">
                <img src={rightbook} alt />
                <img className="lamp-img" src={lamp} alt />
              </div>
              <div className="animation-div2">
                <img src={animation} alt />
                <img className="book-img" src={book} alt />
              </div>
            </div>
          </div>
          <div className="hero__right">
            <h1 className="hero__title">
              Grow Your Skills To Advance Your Career Path.
            </h1>
            <span className="hero__span">
              We have something big for you who want to level up!
            </span>
            <div className="hero__search-input">
              <input
                type="text"
                className="hero__input"
                placeholder="What do you want to learn..."
              />
              <i class="bx bx-search hero__search"></i>
            </div>
            <span className="hero__span">Suggestions</span>
            <div className="hero__btns">
              <button className="hero__btn">UI UX Design</button>
              <button className="hero__btn">CSS Fundamental</button>
              <button className="hero__btn">3D Design Illustration</button>
            </div>
            <div className="hero__btns">
              <button className="hero__btn">Website Development</button>
              <button className="hero__btn">Logo Design</button>
              <button className="hero__btn">Icon Design</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

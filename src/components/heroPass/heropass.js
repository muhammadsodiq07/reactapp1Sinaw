import React from 'react';
import "./heropass.css"
import reduser from "../../imgs/heropassred.svg";
import greenuser from "../../imgs/heropassgreen.svg";
import golduser from "../../imgs/heropassgold.svg";


const Heropass = () => {
  return (
    <div>
  <div className="new-friends container">
    <ul className="friends"> 
      <li className="fr-list">
        <div className="img-red">
          <img className="red-img" src={reduser} alt />
        </div>
        <div className="name-div-fr">
          <h3 className="get-friends">Get New Friends</h3>
          <p className="fr-text">You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!</p>
        </div>
      </li>
      <li className="fr-list row">
        <div className="img-red">

          <img className="red-img" src={greenuser} alt />
        </div>
        <div className="name-div-fr">
          <h3 className="get-friends">Get New Friends</h3>
          <p className="fr-text">You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!</p>
        </div>
      </li>
      <li className="fr-list row">
        <div className="img-red">

          <img className="red-img" src={golduser} alt />
        </div>
        <div className="name-div-fr">
          <h3 className="get-friends">Get New Friends</h3>
          <p className="fr-text">You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!</p>
        </div>
      </li>
    </ul>
  </div>
</div>

  );
}

export default Heropass;

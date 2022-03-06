import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="travelPlacesIntro">
        <h1>COX'S BAZAR</h1>
        <p>
          The longest sea beach in the world is cox's bazar. Travel enthusiasts
          from all over the world come and visit this 120k.m sea beach..
        </p>
      </div>
      <div className="travelPlaces">
        <div className="CoxsBazar">
          <img src="https://i.ibb.co/Ptgvv2T/Rectangle-1.png" alt="" />
          {/* <h4>COX'S BAZAR</h4> */}
        </div>
        <div className="sundorban">
          <img src="https://i.ibb.co/rbCJrXZ/sundorbon.png" alt="" />
          {/* <h4>SUNDARBANS</h4> */}
        </div>
        <div className="SreeMongol">
          <img src="https://i.ibb.co/hRRSCd7/Sreemongol.png" alt="" />
          {/* <h4>SREE MONGOL</h4> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

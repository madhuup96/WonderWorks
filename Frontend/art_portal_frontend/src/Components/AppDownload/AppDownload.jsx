import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better experience download
        <br /> Tomoto App
      </p>
      <div className="app-download-platforms">
        <img src={assets.playstore} alt=""></img>
        <img src={assets.social} alt=""></img>
      </div>
    </div>
  );
};

export default AppDownload;

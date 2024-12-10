import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loaderBody">
      <div className="wrapper">
        <div className="padding-mask">
          <div className="slide"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

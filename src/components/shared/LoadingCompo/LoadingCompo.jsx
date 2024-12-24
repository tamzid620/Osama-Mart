import Loader from "../../../utilies/Loader/Loader";
import React from "react";

const LoadingCompo = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <Loader />
      </div>
    </div>
  );
};

export default LoadingCompo;

import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <BeatLoader color="#f61130" size={50} />
    </div>
  );
};

export default Loader;

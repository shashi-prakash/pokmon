import React from "react";
import { ThreeCircles, Hourglass } from "react-loader-spinner";
export default function Loader() {
  return (
    <>
      <div className="loader-container">
        <div className="loader">
          <Hourglass
            visible={true}
            height="60"
            width="60"
            ariaLabel="hourglass-loading"
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      </div>
    </>
  );
}

import React from "react";

const title = (
  <h2>
    From <span>Jodhpur</span> to Your Doorstep <br /> Quality You Can Trust!
  </h2>
);
const desc = "Step Into Style – Clothing, Shoes, and Accessories for Everyone!";

const Banner = () => {
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">{title}</div>
      </div>
    </div>
  );
};

export default Banner;

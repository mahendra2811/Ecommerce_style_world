import React, { useState } from "react";

import SelectCategory from "../Shop/SelectCategory";
import productData from "../../utilis/products.json";
import { Link } from "react-router-dom";

const title = (
  <h2>
    From <span>Jodhpur</span> to Your Doorstep <br /> Quality You Can Trust!
  </h2>
);
const desc = "Step Into Style – Clothing, Shoes, and Accessories for Everyone!";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  // product search funtionality
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // Filter products based on the search term
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          {/* <p>{desc}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;

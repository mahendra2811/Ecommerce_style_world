import { Link } from "react-router-dom";

const title = (
  <h2 className="title">
    More Then <span className="yellow-color">1,00,000</span> Customers
  </h2>
);
const desc =
  "Step into the world of style with our carefully curated collections for every age and every style. Redefine your wardrobe today!";

const LocationSprade = () => {
  return (
    <div className="clients-section style-2 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          {title}
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationSprade;

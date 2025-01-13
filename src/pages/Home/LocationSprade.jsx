import { Link } from "react-router-dom";

const title = (
  <h2 className="title">
    More Then <span className="yellow-color">1,00,000</span> Customers
  </h2>
);
const desc =
  "Step into the world of style with our carefully curated collections for every age and every style. Redefine your wardrobe today!";

const clientsList = [
  {
    imgUrl: "/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
];
const LocationSprade = () => {
  return (
    <div className="clients-section style-2 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          {title}
          <p>{desc}</p>
        </div>
        {/* <div className="section-wrapper">
          <div className="clients">
            {clientsList.map((val, i) => (
              <div className="client-list" key={i}>
                <Link to="/sign-up" className="client-content">
                  <span>{val.text}</span>
                </Link>
                <div className="client-thumb">
                  <Link target="blank" to="http://mahendrapuniya.online/" >
                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LocationSprade;

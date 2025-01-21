import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../utilis/constant";

const ProductCards = ({ GridList }) => {
  const product = useSelector((store) => store.product.data);

  if (!product || product === 0) {
    return <div>Loading...</div>;
  }
  console.log(product);

  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {product.map((item, i) => (
        <div className="col-lg-4 col-md-6 col-12" key={i}>
          <div className="product-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={BASE_URL + item.imageUrl} alt={item.name} />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${item.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <Link to="/cart-page">
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>
            <div className="product-content">
              <h5>
                <Link to={`/shop/${item.id}`}>{item.name}</Link>
              </h5>
              <h6>₹{item.price}</h6>
            </div>
          </div>
          <div className="product-list-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={BASE_URL + item.imageUrl} alt={item.name} />
              </div>
              <div className="product-action-link">
                <button>
                  <i className="icofont-eye"></i>
                </button>
                <button>
                  <i className="icofont-cart-alt"></i>
                </button>
              </div>
            </div>
            <div className="product-content">
              <Link to={`/shop/${item.id}`}>{item.name}</Link>
              <h6>₹{item.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;

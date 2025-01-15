import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import "swiper/css";
import ProductDisplay from "./ProductDisplay";
import { BASE_URL } from "../../utilis/constant";
import axios from "axios";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(BASE_URL + `/byId/${id}`);
      setProduct(res.data);
      console.log(res.data);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop / Single Product"} />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <div className="single-thumb">
                            <img src={product.imageUrl} alt="" />
                          </div>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          <ProductDisplay item={product} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

import React from "react";
import Tshirts from "../assets/tshirts.jpg";
import Beanie from "../assets/beanie.jpg";
import Hat from "../assets/hat.jpg";
import Shades from "../assets/shades.jpg";
import ColoMug from "../assets/mug.jpg";

import "./Products.css";

const Products = () => {
  return (
    <div className="products__container">
      <div className="title__container">
        <h1>Products Page</h1>
      </div>
      <div className="image__container">
        <img src={Tshirts} alt="" />
        <h4>plain t shirts $14.00</h4>
        <button>Add to Cart</button>
      </div>
      <div className="image__container">
        <img src={Beanie} alt="" />
        <h4>plain beanie $12.00</h4>
        <button>Add to Cart</button>
      </div>
      <div className="image__container">
        <img src={Hat} alt="" />
        <h4>plain hat $20.00</h4>
        <button>Add to Cart</button>
      </div>
      <div className="image__container">
        <img src={Shades} alt="" />
        <h4>shades $25.00</h4>
        <button>Add to Cart</button>
      </div>
      <div className="image__container">
        <img src={ColoMug} alt="" />
        <h4>Colorado Dreamin Mug $14.00</h4>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Products;

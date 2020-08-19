import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

function Product({ title, price, img }) {
  return (
    <div className="product">
      <strong>{title}</strong>

      <p>{price}</p>
      <img className="product__img" src={img} alt="" />
      <button className="btn-basket">Ajouter au panier</button>
    </div>
  );
}

Product.defaultProps = {
  title: "Produit à vendre",
  price: 99.99,
  img:
    "https://www.argentwebmarketing.com/wp-content/uploads/2013/01/quoi-vendre-sur-internet.jpg"
};

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string
};

export default Product;

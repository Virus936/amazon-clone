import React from "react";
import PropTypes from "prop-types";
import "./Product.css";
import { useStateValue } from '../StateProvider';

function Product({ id, title, price, image }) {
  const [{ basket }, dispatch] = useStateValue();
  
  const addToBasket = () => {
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:Date.now(),
        productid:id,
        title,
        image,
        price,
      }
    })
  }
  
  return (
      <div className="product">
        <strong>{title}</strong>

        <p>{price}</p>
        <img className="product__img" src={image} alt="" />
        <button onClick={ addToBasket } className="btn-basket">Ajouter au panier</button>
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
  image: PropTypes.string
};

export default Product;

import React from "react";
import PropTypes from "prop-types";
import "./Checkout.css";
import Header from "./Header";
import { useStateValue } from "../StateProvider";



function Checkout({}) {
  return (
    <>
      <Header />
      <CheckoutContent />
    </>
  );
}

const CheckoutContent = () => {
  return (
    <div className="checkout">
      <CheckoutListProduct />
      <CheckoutTotal/>
    </div>
  );
};

const CheckoutTotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout__total">
      <h2>Total de vos commandes</h2>
      <p><strong>prix total :</strong> { basket?.length === 0 ? 0 :  basket.reduce( (a,b) => a + b.price, 0 )}</p>
    </div>
  )
}

const CheckoutListProduct = () => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    dispatch( {
      type: "REMOVE_FROM_BASKET",
      item: {
        id,
      }
    } );
  };
  return basket?.length === 0 ? (
    <div>
      <h2>panier vide</h2>
    </div>
  ) : (
    <div>
      {basket.map(product => (
        <CheckoutProduct
          key={product.id}
          id={product.id}
          productid={product.productid}
          title={product.title}
          price={product.price}
          image={product.image}
          removeFromBasket={removeFromBasket}
        />
      ))}
    </div>
  );
};

const CheckoutProduct = ({ id, title, price, image, removeFromBasket }) => {

  return (
    <div className="checkout__product" >
      <img src={image} alt="image_de_mon_produit" />
      <strong>{title}</strong>
      <p>{price}</p>
      <button onClick={() => removeFromBasket(id)}>Enlever du panier</button>
    </div>
  );
};

CheckoutProduct.defaultProps = {
  title: "Produit à vendre",
  price: 99.99,
  image:
    "https://www.argentwebmarketing.com/wp-content/uploads/2013/01/quoi-vendre-sur-internet.jpg"
};

CheckoutProduct.propTypes = {};

export default Checkout;

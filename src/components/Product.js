import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.css';

function Product({  }) {
  return (
    <div className="product">
      <strong>Jolie Moto</strong>

      <p>5.44euro</p>
      <img className="product__img" src="https://pixabay.com/get/53e6dc4b4c57b10ff3d89960c62d3e79123ad9e75154_640.jpg" alt="" />
      <button className="btn-basket">Ajouter au panier</button>
    </div>
  );
}

Product.defaultProps = {};

Product.propTypes = {
};

export default Product;

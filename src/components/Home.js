import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "./Header";
import Product from "./Product";

const STORE_API = "https://fakestoreapi.com/products?limit=12";
const AMAZONS_BANNER =
  "https://images-eu.ssl-images-amazon.com/images/G/08/AmazonMusic/2020/ACQ/DotforX_DMUX_2801/FR-FR_072020_EUdotX_ACQ_GW_Hero_D_3000x1200_CV1a._CB408588385_.jpg";

function Home() {
  return (
    <>
      <Header />
      <HomeContent />
    </>
  );
}

const HomeContent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(STORE_API)
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div className="home">
      <img className="home__image" src={AMAZONS_BANNER} alt="amazon_bannière" />
      <div className="home__content">
        {products.map(product => (
          <Product
            key={product.id}
            title={product.title}
            img={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

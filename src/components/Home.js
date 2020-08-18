import React from 'react';
import styles from './Home.css';
import Header from './Header';
import Product from './Product';

function Home({  }) {
  return (
    <>
      <Header />
      <div className="home">

        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/08/AmazonMusic/2020/ACQ/DotforX_DMUX_2801/FR-FR_072020_EUdotX_ACQ_GW_Hero_D_3000x1200_CV1a._CB408588385_.jpg" alt="amazon_bannière" />
        <div className='home__content'>
          <Product title='Jolie Moto' price={ 5.99 } img="https://www.audemar.com/15153-thickbox_default/tapis-moto-gp-suzuki-ecstar.jpg"/>
          <Product />
          <Product />
          <Product />
          <Product title='Jolie Moto' price={ 5.99 } img="https://www.audemar.com/15153-thickbox_default/tapis-moto-gp-suzuki-ecstar.jpg"/>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
}

export default Home;

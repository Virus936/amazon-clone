import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

function Header({  }) {
  return (
    <nav className="header">
      {/*Logo */ }

      <Link to='/'>
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon_logo" />
      </Link>


      {/*barre de recherche */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon height='100%' width='100%' className="header__searchIcon"/>
      </div>

      { /* navbar */ }
     <div className="header__nav">
       <Link to='/' className="header__link">
         <div className="header__option">
           <span>Hello Vira</span>
           <span>Compte et listes</span>
         </div>
       </Link>
       <Link to='/' className="header__link">
         <div className="header__option">
           <span>Retours</span>
           <span>et Commandes</span>
         </div>
       </Link>
       <Link to='/' className="header__link">
         <div className="header__option">
           <span>Votre</span>
           <span>Prime</span>
         </div>
       </Link>
       <Link to='/' className="header__link">
         <div className="header__optionbasket">
           <ShoppingBasketOutlinedIcon className="header__basket"/>
           <span>3</span>
         </div>
       </Link>
     </div>
      {
        /* 
        barre de recherche
        navbar
        panier
        */
      }
    </nav>
  );
}

export default Header;

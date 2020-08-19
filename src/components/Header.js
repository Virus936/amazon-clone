import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { useStateValue } from "../StateProvider";

function Header() {
  return (
    <nav className="header">
      <Logo />
      <SearchBar />
      <NavBar className="header__nav" />
    </nav>
  );
}

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="amazon_logo"
      />
    </Link>
  );
};

const SearchBar = () => {
  return (
    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <SearchIcon height="100%" width="100%" className="header__searchIcon" />
    </div>
  );
};

const NavBar = () => {
  return (
    <>
      <NavElement to="/" bigtitle="Hello Vira" smalltitle="Compte et Listes" />
      <NavElement to="/login" bigtitle="Retours" smalltitle="et Commandes" />
      <NavElement to="/" bigtitle="Votre" smalltitle="Prime" />
      <Basket />
    </>
  );
};

const NavElement = ({ to, bigtitle, smalltitle }) => {
  return (
    <Link to={to} className="header__link">
      <div className="header__option">
        <span> {bigtitle} </span>
        <span> {smalltitle} </span>
      </div>
    </Link>
  );
};

const Basket = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Link to="/" className="header__link">
      <div className="header__optionbasket">
        <ShoppingBasketOutlinedIcon className="header__basket" />
        <span> {basket.length} </span>
      </div>
    </Link>
  );
};

export default Header;

import React, { useContext } from "react";
import {Context} from "./Context";
import { Link, Route, Switch } from "react-router-dom";
import Photos from "../pages/Photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCartFlatbedEmpty } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Header() {

    const {addToCart} = useContext(Context)

    const displayCart = addToCart.length>=1 ? <FontAwesomeIcon icon={faCartPlus} /> : <FontAwesomeIcon icon={faCartShopping} />

  return (
    <div className="header">
      <Link to="/">
        <h1 className="headerHheading">Pic Some</h1>
      </Link>

      <div className="cart mycart">
        <Link to="/cart">
          {displayCart}
        </Link>
      </div>
    </div>
  );
}

export default Header;

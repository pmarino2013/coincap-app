import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/coincap.png";
import CoinSearch from "./CoinSearch";
const CoinNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container justify-content-between">
        <div>
          <Link to="/">
            <img className="img-logo" src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <CoinSearch />
          <li className="nav-item">
            <Link className="nav-link active" to="/login">
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CoinNav;

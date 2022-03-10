import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/coincap.png";
const CoinNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container justify-content-between">
        <div>
          <img className="img-logo" src={logo} alt="logo" />
        </div>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/login">
              Cerrar sesión
            </Link>
          </li>
        </ul>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul> */}
        {/* </div> */}
      </div>
    </nav>
  );
};

export default CoinNav;

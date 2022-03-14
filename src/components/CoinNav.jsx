import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/coincap.png";
import CoinSearch from "./CoinSearch";
const CoinNav = () => {
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    setAvatar(JSON.parse(localStorage.getItem("auth")));
  }, []);

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
          <li className="nav-item d-flex">
            <div className="ms-2">
              <img className="img_avatar" src={avatar.imageUrl} alt="avatar" />
            </div>
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

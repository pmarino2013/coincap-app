import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CoinScreen from "../pages/CoinScreen";

const SecondRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="coin/:coinId" element={<CoinScreen />} />
    </Routes>
  );
};

export default SecondRoute;

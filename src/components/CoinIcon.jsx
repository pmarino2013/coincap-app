import React from "react";

const CoinIcon = ({ symbol }) => {
  return (
    <div>
      <img
        src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
        className="img-icon"
        alt={symbol}
      />
    </div>
  );
};

export default CoinIcon;

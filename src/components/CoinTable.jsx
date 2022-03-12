import React from "react";
import CoinIcon from "./CoinIcon";
import numeral from "numeral";

import { Link } from "react-router-dom";

import { Table } from "react-bootstrap";

const CoinTable = ({ datos, update, setUpdate }) => {
  return (
    <Table className="table-coin">
      <thead>
        <tr>
          <th>#Rank</th>
          <th>Name</th>
          <th>Price Usd</th>
          <th>Market Cap</th>
          <th>VWAP(24hr)</th>
          <th>Supply</th>
          <th>Volume (24hr)</th>
          <th>
            <button className="btn btn-coin" onClick={() => setUpdate(!update)}>
              Update
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {datos.map((coin) => (
          <tr key={coin.id}>
            <td className="text-center">{coin.rank}</td>
            <td className="d-flex  justify-content-between">
              <div className="icon">
                <CoinIcon symbol={coin.symbol} />
              </div>
              <Link className="nav-link" to={`coin/${coin.id}`}>
                <span className="ms-2">{coin.name}</span>
              </Link>
            </td>
            <td>{numeral(coin.priceUsd).format("$0,0.00")}</td>
            <td>{numeral(coin.marketCapUsd).format("($ 0.00 a)")}</td>
            <td>{numeral(coin.vwap24Hr).format("$0,0.00")}</td>
            <td>{numeral(coin.supply).format("($ 0.00 a)")}</td>
            <td>{numeral(coin.volumeUsd24Hr).format("($ 0.00 a)")}</td>
            <td
              className={
                coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
              }
            >
              {parseFloat(coin.changePercent24Hr).toFixed(2)}%
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CoinTable;

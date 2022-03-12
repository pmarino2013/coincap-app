import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinIcon from "../components/CoinIcon";

import { getCoinId } from "../helpers/coinFetch";

const CoinScreen = () => {
  let params = useParams();

  const { coinId } = params;
  const [coin, setCoin] = useState({
    loading: true,
    datos: {},
  });

  const { loading, datos } = coin;

  useEffect(() => {
    getCoinId(coinId).then((respuesta) => {
      console.log(respuesta);
      setCoin({
        loading: false,
        datos: respuesta,
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Coin Screen</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          {loading ? (
            <div className="alert alert-primary text-center" role="alert">
              Cargando información...
            </div>
          ) : (
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <CoinIcon symbol={datos.symbol} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinScreen;

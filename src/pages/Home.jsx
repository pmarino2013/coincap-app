import React, { useEffect, useState } from "react";

import { getCoins, SearchCoinByName } from "../helpers/coinFetch";

// import { Table } from "react-bootstrap";
// import CoinNav from "../components/CoinNav";
// import CoinIcon from "./components/CoinIcon";
import CoinTable from "../components/CoinTable";
import CoinPagination from "../components/CoinPagination";

const Home = () => {
  const [update, setUpdate] = useState(false);
  const [pagina, setPagina] = useState(0);
  const [coins, setCoins] = useState({
    loading: true,
    datos: [],
  });

  const { datos, loading } = coins;

  useEffect(() => {
    getCoins(pagina).then((respuesta) => {
      setCoins({
        loading: false,
        datos: respuesta.data,
      });
    });
  }, [update, pagina]);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 ">
            {loading ? (
              <h3 className="text-center text-white">Cargando data...</h3>
            ) : (
              <>
                {/* <SearchCoinByName /> */}
                <CoinTable
                  datos={datos}
                  update={update}
                  setUpdate={setUpdate}
                />
                <CoinPagination setPagina={setPagina} pagina={pagina} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

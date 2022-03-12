import React from "react";

const CoinPagination = ({ setPagina, pagina }) => {
  const paginacion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const nextPage = () => {
    if (pagina < 9) {
      setPagina(pagina + 1);
    }
  };

  const prevPage = () => {
    if (pagina > 0) {
      setPagina(pagina - 1);
    }
  };
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={pagina === 0 ? "page-item disabled" : "page-item"}>
          <button className="page-link" onClick={prevPage}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
        </li>
        {paginacion.map((pag, index) => (
          <li
            key={index}
            className={index === pagina ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => setPagina(index)}>
              {pag}
            </button>
          </li>
        ))}

        <li className={pagina === 9 ? "page-item disabled" : "page-item"}>
          <button className="page-link" onClick={nextPage}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default CoinPagination;

import React, { useEffect, useState } from "react";
import { SearchCoinByName } from "../helpers/coinFetch";
import { useNavigate } from "react-router-dom";

const CoinSearch = () => {
  let navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  useEffect(() => {
    if (inputValue) {
      SearchCoinByName(inputValue).then((response) => {
        console.log(response);
        setOptions(response);
      });
    }
  }, [inputValue]);

  const searchCripto = () => {
    if (inputValue) {
      navigate(`/coin/${inputValue}`);
      setInputValue("");
    }
  };

  return (
    <div className="d-flex">
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Search..."
        value={inputValue}
        onChange={handleChange}
      />
      <datalist id="datalistOptions">
        {options.length > 0 &&
          options.map((item) => <option key={item.id} value={item.id} />)}
      </datalist>
      <button className="btn btn-success ms-1" onClick={searchCripto}>
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default CoinSearch;

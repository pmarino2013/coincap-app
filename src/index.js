import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import "bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.warn(error));

// const peticionHttp = async () => {

//   try {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await resp.json();
//     return data;

//   } catch (error) {

//   }
// };

// peticionHttp().then((respuesta) => {
//   console.log("AsyncAwait:", respuesta);
// });

// const promesa = () => {
//   return new Promise((resolve, reject) => {
//     let validar = false;
//     setTimeout(() => {
//       if (validar) {
//         resolve("Se realizó promesa :)");
//       } else {
//         reject("No se realizó promesa :(");
//       }
//     }, 3000);
//   });
// };

// promesa()
//   .then((respuesta) => console.log(respuesta))
//   .catch((error) => console.log(error));

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
// import Home from "./pages/Home";
import LoginScreen from "./pages/LoginScreen";
// import CoinScreen from "./pages/CoinScreen";
import ProtectRoutes from "./routes/ProtectRoutes";

import "font-awesome/css/font-awesome.css";
import SecondRoute from "./routes/SecondRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route
          path="/*"
          element={
            <ProtectRoutes>
              <SecondRoute />
            </ProtectRoutes>
          }
        />
        {/* <Route
          path="/"
          element={
            <ProtectRoutes>
              <Home />
            </ProtectRoutes>
          }
        />
        <Route
          path="coin/:coinId"
          element={
            <ProtectRoutes>
              <CoinScreen />
            </ProtectRoutes>
          }
        /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

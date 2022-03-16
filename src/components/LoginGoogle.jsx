import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";

const LoginGoogle = () => {
  useEffect(() => {
    localStorage.removeItem("auth");
  }, []);

  let navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);
    // console.log(response.profileObj);
    if (response?.error) {
      console.warn("Se cancelo inicio de sesión");
    } else {
      // console.log("Inicio de sesión con éxito :)");
      localStorage.setItem("auth", JSON.stringify(response.profileObj));
      navigate("/");
    }
  };

  return (
    <GoogleLogin
      clientId="877760850378-q81jlodd8ftkpmni94p679p3p8i1v8re.apps.googleusercontent.com"
      buttonText="Iniciar sesión con Google"
      onSuccess={responseGoogle}
      isSignedIn={true}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginGoogle;

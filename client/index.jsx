import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Frontpage() {
  return (
    <div>
      <h1>Frontpage</h1>
      <div>
        <div>
          <Link to={"login"}>Login </Link>
        </div>
        <div>
          <Link to={"profile"}>Your profile</Link>
        </div>
      </div>
    </div>
  );
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed ${res.status}`);
  }
  return await res.json();
}

function Login() {
  useEffect(async () => {
    const { authorization_endpoint } = await fetchJSON(
      "https://accounts.google.com/.well-known/openid-configuration"
    );

    const parameters = {
      response_type: "token",
      client_id:
        "1015959050003-rgbuu41fh7a0q95jg2dtj7ukg613eqsp.apps.googleusercontent.com",
      scope: "email profile",
      redirect_uri: window.location.origin + "/login/callback",
    };

    window.location.href =
      authorization_endpoint + "?" + new URLSearchParams(parameters);
  }, []);

  return (
    <div>
      <h1>Please wait..</h1>
    </div>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Frontpage />} />
        <Route
          path={"/login"}
          element={
            <h1>
              <Login />
            </h1>
          }
        />
        <Route path={"/login/callback"} element={"Login callback"} />
        <Route path={"/profile"} element={"Profile"} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));

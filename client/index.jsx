import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Frontpage() {
  return (
    <div>
      <h1>Frontpage</h1>
      <div>
        <div>
          <Link to={"login"}>Login</Link>
        </div>
        <div>
          <Link to={"profile"}>Your profile</Link>
        </div>
      </div>
    </div>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Frontpage />} />
        <Route path={"/login"} element={"Login"} />
        <Route path={"/login/callback"} element={"Login callback"} />
        <Route path={"/profile"} element={"Profile"} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));

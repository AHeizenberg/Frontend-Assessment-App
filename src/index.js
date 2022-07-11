import "./css/body.css";
import "./css/app.css";
import "./css/header.css";
import "./css/development.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import Routes from "./routes/Routes";
import MainLayout from "./commonComponents/MainLayout";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout>
        <Routes />
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

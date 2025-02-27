/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================
*/
/* eslint-disable prettier/prettier */
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Provider } from "react-redux";
import store from 'layouts/store/store.js'
import { MaterialUIControllerProvider } from "context"; // Material Dashboard 2 React Context Provider
import PrivateRoute from "PrivateRoute";

const container = document.getElementById("app"); // Ensure this matches the ID in your index.html
const root = createRoot(container);

root.render(
  <Provider store={store}>  
  <BrowserRouter>
    
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    
  </BrowserRouter>
  </Provider>
);

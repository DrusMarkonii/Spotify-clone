import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./components/App/App";
import store from "./store/reducers/rootReducer";

import "./index.css";

const container: any = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

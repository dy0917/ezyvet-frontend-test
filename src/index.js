import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./stores";
import { Provider } from "react-redux";
whyDidYouRender(React);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

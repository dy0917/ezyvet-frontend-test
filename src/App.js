import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}


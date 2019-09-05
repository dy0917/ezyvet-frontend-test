import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}


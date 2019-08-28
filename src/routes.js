import React from "react";
import { Route } from "react-router-dom";
import { Cart, Products } from "./pages";

const createRoutes = () => (
  <Route>
    <Route exact path="/" component={Products} />
    <Route exact path="/cart" component={Cart} />
  </Route>
);

export default createRoutes;

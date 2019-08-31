import React from "react";
import {Route, Switch, Router} from "react-router-dom";
// import ContextRouter from './router/contextRouter'
import { Cart, Products } from "./pages";

const createRoutes = () => (
<Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/cart" component={Cart} />
</Switch>
);

export default createRoutes;

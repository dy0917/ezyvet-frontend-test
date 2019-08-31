import React from "react";
import {Route, Switch} from "react-router-dom";
import { Cart, Products } from "./pages";

const createRoutes = () => (
<Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/cart" component={Cart} />
</Switch>
);

export default createRoutes;

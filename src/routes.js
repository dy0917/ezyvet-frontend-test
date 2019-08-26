import React from 'react';
import { Route } from 'react-router-dom'
import { Cart, Products } from './pages';

const createRoutes = () => (
        <div>
        <Route exact path="/" component={Products}/>
        <Route exact path="/cart" component={Cart}/>
        </div>
);

export default createRoutes;
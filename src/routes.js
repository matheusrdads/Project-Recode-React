import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home';
import Products from './views/Products';
import Contact from './views/Contact';
import Stores from './views/Stores';

export default function Routes(){
    return(
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/stores" component={Stores}/>
        </Switch>
        <Footer />
        </BrowserRouter>
    );
}
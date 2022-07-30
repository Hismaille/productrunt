import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Sobre from './components/Pages/Sobre';
import Contato from './components/Pages/Contato';

export default function Pages(){
    return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/sobre' component={Sobre} />
                <Route exact path='/contato' component={Contato} />
            </Switch>
    )

}
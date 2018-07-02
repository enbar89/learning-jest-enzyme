import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom'
import ClickCounter from './demos/click-counter/ClickCounter';
import Jotto from './demos/jotto/Jotto';

import './css/app.css';

class App extends Component
{
    render()
    {
        return <div className="src-app--container">

            <Route path="/counter" render={() => <ClickCounter/>}/>

            <Route path="/jotto" render={() => <Jotto/>}/>

        </div>;
    }
}

export default hot(module)(App);
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link } from 'react-router-dom'
import ClickCounter from './demos/click-counter/ClickCounter';
import Jotto from './demos/jotto/Jotto';

import './css/app.css';

class App extends Component
{
    render()
    {
        return <div className="src-app--container">

            <div className="src-app--route-links">

                <Link to="/counter">Counter</Link>

                <Link to="/jotto">Jotto</Link>

            </div>

            <Route path="/counter" render={() => <ClickCounter/>}/>

            <Route path="/jotto" render={() => <Jotto/>}/>

        </div>;
    }
}

export default hot(module)(App);
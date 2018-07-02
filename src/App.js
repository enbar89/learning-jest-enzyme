import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import ClickCounter from './demos/click-counter/ClickCounter';

import './css/app.css';

class App extends Component
{
    render()
    {
        return <div className="src-app--container">

            <ClickCounter/>

        </div>;
    }
}

export default hot(module)(App);
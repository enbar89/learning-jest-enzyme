import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './css/app.css';

class App extends Component
{
    render()
    {
        return <div className="src-app--container">

            <h1>Hello World</h1>

        </div>;
    }
}

export default hot(module)(App);
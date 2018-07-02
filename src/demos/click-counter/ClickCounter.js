import React, { Component } from 'react';

import './css/click-counter.css';

export default class ClickCounter extends Component
{
    constructor(props)
    {
        super(props);

        this.state = { counter: 0, displayError: false };
    }

    updateCounter(button)
    {
        const { counter, displayError } = this.state;

        if('increment' === button)
        {
            this.setState({ counter: counter + 1 });

            if(displayError) this.setState({ displayError: false });
        }
        else
        {
            if(counter > 0)
            {
                this.setState({ counter: counter - 1 })
            }
            else
            {
                if(!displayError) this.setState({ displayError: true });
            }
        }
    }

    getErrorMessage()
    {
        const { displayError } = this.state;

        if(displayError)
        {
            return <h3 className="demos-click-counter--error-message">
                Counter cannot go below zero!
            </h3>;
        }
    }

    render()
    {
        const { counter } = this.state;

        return <div data-test="component-click-counter">

            <h1 data-test="counter-display">The counter is currently { counter }</h1>

            <button data-test="increment-button" onClick={() => this.updateCounter('increment')}>
                Increment Counter
            </button>

            <button data-test="decrement-button" onClick={() => this.updateCounter('decrement')}>
                Decrement Counter
            </button>

            { this.getErrorMessage() }

        </div>;
    }
}
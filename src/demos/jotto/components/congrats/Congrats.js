import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @yields {Component} - Rendered component (or null if 'success' prop is false).
 */
export default props =>
{
    if(props.success)
    {
        return <div data-test="component-congrats">

            <span data-test="congrats-message">

                Congratulations! You guessed the word!

            </span>

        </div>;
    }

    return <div data-test="component-congrats"/>;
}
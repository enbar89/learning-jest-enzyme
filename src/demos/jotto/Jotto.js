import React, { Component } from 'react';
import Congrats from './components/congrats/Congrats';
import GuessedWords from './components/guessed-words/GuessedWords';

import './css/jotto.css';

export default class Jotto extends Component
{
    render()
    {
        return <div data-test="component-jotto" className="demos-jotto--container">

            <h1>Jotto</h1>

            <Congrats success={true}/>

            <GuessedWords guessedWords={[
                { guessedWord: 'train', letterMatchCount: 3 }
            ]}/>

        </div>;
    }
}
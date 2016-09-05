import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
    <div>
        <App test="This is my first property" hisoka="This is the second properties...;)"/>
        <App test="This is my first 2 property" hisoka="This is the second 2 properties...;)"/>
        <App test="This is my first 3 property" hisoka="This is the second 3 properties...;)"/>
    </div>
    , document.getElementById('app'))
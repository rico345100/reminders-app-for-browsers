/* @flow */
import 'babel-polyfill';
import 'css/common.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// $FlowFixMe
ReactDOM.render(<App />, document.getElementById("app"));
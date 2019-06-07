import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'styles/base.scss';
import * as serviceWorker from './serviceWorker';
import routerRoot from 'router/router';

ReactDOM.render(routerRoot, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

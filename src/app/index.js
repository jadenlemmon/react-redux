import React from 'react'
import { render } from 'react-dom'
import App from './app'
import './scss/app.scss'
import store from './store';

render(
    <App store={store} />,
    document.getElementById('app')
);
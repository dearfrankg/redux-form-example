import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore(window.__INITIAL_STATE__);

const node = <Root store={store} />
const target = document.getElementById('root');
ReactDOM.render(node, target);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/css/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import indexReducers from './store/reducers/index'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(indexReducers, enhancer);

console.log('========',store.getState());
ReactDOM.render(
            <Provider store={store}>
            <App /> 
            </Provider>,
            document.getElementById('root'));

export default store;
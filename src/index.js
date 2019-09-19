import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/css/index.css';
<<<<<<< HEAD
import 'antd/dist/antd.css';
import { createStore } from 'redux';
=======
>>>>>>> 7956fe744bd7841cd73e2d737e2ffda66469b5a2
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
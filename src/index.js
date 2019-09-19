import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/css/index.css';
import 'antd/dist/antd.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import indexReducers from './store/reducers/index'
const store=createStore(indexReducers)
console.log('========',store.getState());
ReactDOM.render(
            <Provider store={store}>
            <App /> 
            </Provider>,
            document.getElementById('root'));


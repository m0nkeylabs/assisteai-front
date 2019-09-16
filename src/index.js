import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from "redux-saga";

import promise from 'redux-promise'
import multi from 'redux-multi'

import './assets/sass/index.sass'

import App from './App';
import reducers from './store/reducers'
import rootSaga from "./store/sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

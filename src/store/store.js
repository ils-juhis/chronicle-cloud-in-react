
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./sagas/index";
import rootReducer from './reducers/index'

const sagaMiddleware = createSagaMiddleware();

const store = createStore (
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    )

export default store;


// running the sagas
sagaMiddleware.run(rootSaga);
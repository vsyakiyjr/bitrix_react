import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "./reducers";

import {watchDealList } from "./sagas/order/order";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watchDealList);

export default store;

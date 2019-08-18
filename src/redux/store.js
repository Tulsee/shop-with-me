import {
    createStore,
    applyMiddleware
} from "redux";
import {
    persistStore
} from "redux-persist";
import logger from 'redux-logger';

import rootReducer from "./root-reducer";
// const initalState = {};

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// const store = createStore(rootReducer, initalState, compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export const persistor = persistStore(store);

export default {
    store,
    persistor
};
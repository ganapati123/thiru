
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from './../reducers/index.js'
import promiseMiddleware from 'redux-promise'

var store=createStore(rootReducer,applyMiddleware(promiseMiddleware))
export default store;

import {combineReducers} from 'redux'

import EmpReducer from './empReducer.js';
import UserReducer from './userReducer.js';
import StudentReducer from './studentReducer.js';

var rootReducer=combineReducers({
    EmpReducer,UserReducer,StudentReducer
})
export default rootReducer;
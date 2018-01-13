import {combineReducers} from 'redux';
import sendMessageReducer from './userNameReducer';
import chatMessageReducer from './chatMessageReducer';

export default combineReducers({sendMessageReducer, chatMessageReducer});
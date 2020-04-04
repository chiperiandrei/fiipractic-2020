import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { isLoggedReducer } from './isLoggged';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    logged: isLoggedReducer,
    users: usersReducer
})
import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../pages/login/redux/slice/index';

const rootReducer = combineReducers({
    auth: authSlice,
});

export default rootReducer;

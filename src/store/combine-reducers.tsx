import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../pages/login/redux/slice/index';
import clientSlice from '../pages/clients/redux/slice/index';

const rootReducer = combineReducers({
    auth: authSlice,
    client: clientSlice,
});

export default rootReducer;

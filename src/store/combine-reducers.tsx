import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../pages/login/redux/slice/index';
import clientSlice from '../pages/clients/redux/slice/index';
import systemSlice from './system.slice';

const rootReducer = combineReducers({
    system: systemSlice,
    auth: authSlice,
    client: clientSlice,
});

export default rootReducer;

import { configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './combine-reducers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            immutableCheck: false,
            serializableCheck: false,
            actionCreatorCheck: true,
        }).concat([thunk, logger]),
});

export const persistor = persistStore(store);

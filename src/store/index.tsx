import { store, persistor } from './store';
import { RootState, AppDispatch, AppThunk, useAppDispatch, useAppSelector } from './state-actions';

// eslint-disable-next-line react-refresh/only-export-components
export { store, persistor, useAppDispatch, useAppSelector };
export type { RootState, AppDispatch, AppThunk };

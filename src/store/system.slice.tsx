import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './state-actions';

export interface ISystemState {
    loading: boolean;
    loadingMsg: string;
    alertSys: {
        show: boolean;
        type: 'error' | 'warnnig' | 'info' | null;
        StatusCode: string | number | undefined;
        mensage: string;
    };
    modal: { show: boolean; modalName: 'string' | null; data: unknown };
}
export const initialState: ISystemState = {
    loading: false,
    loadingMsg: 'carregando',
    alertSys: { show: false, type: null, StatusCode: undefined, mensage: '' },
    modal: { show: false, modalName: null, data: [] },
};

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        clearState: () => initialState,
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setLoadingMsg: (state, action) => {
            state.loadingMsg = action.payload;
        },
        setAlert: (state, action) => {
            state.alertSys = action.payload;
        },

        setModal: (state, action) => {
            state.modal = action.payload;
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
});

export const { clearState, setLoading, setAlert, setModal, setLoadingMsg } = systemSlice.actions;

export const sytemSelectAll = (state: RootState) => state.system;

export default systemSlice.reducer;

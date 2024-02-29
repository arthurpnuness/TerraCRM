import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../store';
import { Client } from '../../../../shared/contratcs/client.interface';

export interface IClientState {
    clients: Client[];
    clientEdit: Client | null;
    codClient: string | number | null;
    showModalInfoClient: boolean;
}
export const initialState: IClientState = {
    clients: [],
    clientEdit: null,
    codClient: null,
    showModalInfoClient: false,
};

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        clearState: () => initialState,
        setEdit: (state, action) => {
            state.clientEdit = action.payload;
        },
        setCodClient: (state, action) => {
            state.codClient = action.payload;
        },
        setListClient: (state, action) => {
            state.clients = action.payload;
        },
        setModalInfo: (state, action) => {
            state.showModalInfoClient = action.payload;
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extraReducers(_builder) {},
});

export const { clearState, setEdit, setListClient, setModalInfo, setCodClient } =
    clientSlice.actions;

export const clientSelectAll = (state: RootState) => state.client;

export default clientSlice.reducer;

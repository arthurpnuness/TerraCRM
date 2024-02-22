import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../store';
import { User } from '../../../../shared/contratcs/user.interface';
import { loginFirebase } from '../thunk';

export interface IAuth {
    user: null | User;
    islogged: boolean;
}
export const initialState: IAuth = {
    user: null,
    islogged: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers(builder) {
        builder.addCase(loginFirebase.fulfilled, (state, action) => {
            state.user = action.payload;
            state.islogged = true;
        });
    },
});

export const { logout } = authSlice.actions;

export const authSelectAll = (state: RootState) => state.auth;

export default authSlice.reducer;

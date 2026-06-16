import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    name: string
}

const initialState: LoginState = {
    name: 'name'
};

export const counterSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        initLong: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
});

export const { initLong } = counterSlice.actions;
export default counterSlice.reducer;
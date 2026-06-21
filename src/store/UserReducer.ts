import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
    name: string;
    email: string;
    password: string;
}

interface UserLogin {
    email: string;
    password: string;
}

interface UsersState {
    list: User[];
    currentUser: string | null;
}

const initialState: UsersState = {
    list: [{ name: 'admin', email: 'admin@mail.com', password: 'qwerty' }, { name: 'user', email: 'email@mail.com', password: 'qwerty' }],
    currentUser: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<UserLogin>) => {
            const user = current(state.list).filter(u => u.email === action.payload.email && u.password === action.payload.password);
            if (user && user.length === 1) {
                state.currentUser = user[0].name;
            }
        },
        registerUser: (state, action: PayloadAction<User>) => {
            const exists = state.list.some(u => u.name === action.payload.name);
            if (!exists) {
                state.list.push(action.payload);
                state.currentUser = action.payload.name;
            }
        }
    },
});

export const { registerUser, loginUser } = usersSlice.actions;
export default usersSlice.reducer;
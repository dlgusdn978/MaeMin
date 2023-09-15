import { createSlice } from '@reduxjs/toolkit';

export interface userState {
	loginId: string;
}

const initialState: userState = {
	loginId: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

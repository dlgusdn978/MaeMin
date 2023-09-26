import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface userState {
	loginId: string;
	userName: string;
	role?: string;
}

const initialState: userState = {
	loginId: '',
	userName: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<userState>) => {
			state.userName = action.payload.userName;
			state.loginId = action.payload.loginId;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

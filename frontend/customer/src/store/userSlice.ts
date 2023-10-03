import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface userState {
	loginId: string;
	userName: string;
	role?: string;
	pay?: boolean;
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
			state.pay = action.payload.pay;
		},
		setPay: (state, action: PayloadAction<boolean>) => {
			state.pay = action.payload;
		},
	},
});

export const { setUser, setPay } = userSlice.actions;

export default userSlice.reducer;

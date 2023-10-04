import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface userState {
	nickName: string;
	userName: string;
	nickName: string;
	role?: string;
	pay?: boolean;
}

const initialState: userState = {
	nickName: '',
	userName: '',
	nickName: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<userState>) => {
<<<<<<< HEAD
			state.loginId = action.payload.loginId;
			state.userName = action.payload.userName;
=======
			state.userName = action.payload.userName;
			state.nickName = action.payload.nickName;
>>>>>>> ad8707542a8ddbfdcdfc1c7eca7c37569fbf4aeb
			state.pay = action.payload.pay;
		},
		setPay: (state, action: PayloadAction<boolean>) => {
			state.pay = action.payload;
		},
	},
});

export const { setUser, setPay } = userSlice.actions;

export default userSlice.reducer;

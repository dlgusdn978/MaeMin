import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface userState {
	nickName: string;
	userName: string;
	role?: string;
	pay?: boolean;
}

const initialState: userState = {
	nickName: '',
	userName: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<userState>) => {
			state.userName = action.payload.userName;
			state.nickName = action.payload.nickName;
			state.pay = action.payload.pay;
		},
		setPay: (state, action: PayloadAction<boolean>) => {
			state.pay = action.payload;
		},
	},
});

export const { setUser, setPay } = userSlice.actions;

export default userSlice.reducer;

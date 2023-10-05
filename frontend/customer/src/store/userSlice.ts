import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface userState {
	loginId: string;
	userName: string;
	nickName: string;
	role?: string;
	pay?: boolean;
	payId?: number;
}

const initialState: userState = {
	loginId: '',
	userName: '',
	nickName: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<userState>) => {
			state.loginId = action.payload.loginId;
			state.userName = action.payload.userName;
			state.nickName = action.payload.nickName;
			state.pay = action.payload.pay;
		},
		setPay: (state, action: PayloadAction<boolean>) => {
			state.pay = action.payload;
		},
		setPayId: (state, action: PayloadAction<number>) => {
			state.payId = action.payload;
		},
	},
});

export const { setUser, setPay, setPayId } = userSlice.actions;

export default userSlice.reducer;

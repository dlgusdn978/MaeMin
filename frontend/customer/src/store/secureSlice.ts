import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface secureState {
	random: number;
	key: string;
}

const initialState: secureState = {
	random: 0,
	key: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<secureState>) => {
			state.random = action.payload.random;
			state.key = action.payload.key;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

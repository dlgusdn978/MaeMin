import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface secureState {
	random: number;
	key: string;
}

const initialState: secureState = {
	random: Math.random(),
	key: '',
};

export const secureSlice = createSlice({
	name: 'secure',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<secureState>) => {
			state.random = action.payload.random;
			state.key = action.payload.key;
		},
	},
});

export const { setUser } = secureSlice.actions;

export default secureSlice.reducer;

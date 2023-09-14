import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface basketState {
	totalPrice: number;
}

const initialState: basketState = {
	totalPrice: 0,
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addTotalPrice: (state, action: PayloadAction<number>) => {
			state.totalPrice += action.payload;
			console.log('호출');
		},
	},
});

export const basketActions = basketSlice.actions;
export default basketSlice.reducer;

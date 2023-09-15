import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface menuState {
	menuId: string;
	menuName: string;
	menuPrice: number;
	menuCount: number;
	menuImg: string;
	menuPicker: string;
	menuPayerList: string[];
}
export interface basketState {
	totalPrice: number;
	menuList: menuState[];
}

const initialState: basketState = {
	totalPrice: 0,
	menuList: [],
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

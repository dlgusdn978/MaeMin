import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import pollack from '../../src/assets/imgs/pollack.jpg';
import rose from '../../src/assets/imgs/rose.jpg';
export interface menuState {
	// menuOptionId
	menuId: string;
	menuName: string;
	menuPrice: number;
	menuCount: number; // quantity
	menuImg: string;
	menuPicker: string;
	menuPayerList: string[];
	index: number;
}
export interface basketState {
	// orderId, userId, storeId, paymentMethod, requests, table
	totalPrice: number;
	menuList: menuState[];
}

const initialState: basketState = {
	totalPrice: 0,
	menuList: [
		{
			menuId: '1',
			menuName: '로제 파스타',
			menuPrice: 8900,
			menuCount: 1,
			menuImg: rose,
			menuPicker: '나',
			menuPayerList: ['나'],
			index: 0,
		},
		{
			menuId: '2',
			menuName: '명란 파스타',
			menuPrice: 7900,
			menuCount: 2,
			menuImg: pollack,
			menuPicker: '나',
			menuPayerList: [],
			index: 1,
		},
		{
			menuId: '2',
			menuName: '명란 파스타',
			menuPrice: 7900,
			menuCount: 2,
			menuImg: pollack,
			menuPicker: '나',
			menuPayerList: [],
			index: 2,
		},
	],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addTotalPrice: (state, action: PayloadAction<number>) => {
			state.totalPrice += action.payload;
			console.log('호출');
		},
		addMenu: (state, action: PayloadAction<menuState>) => {
			state.menuList.push(action.payload);
		},
		deleteMenu: (state, action: PayloadAction<number>) => {
			console.log('호출');
			console.log(action.payload + '?');
			const deleteMenu: menuState = state.menuList[action.payload];
			const menuPrice: number = deleteMenu.menuPrice * deleteMenu.menuCount;
			state.totalPrice -= menuPrice;
			const result: menuState[] = state.menuList.filter((item) => {
				return item.index != action.payload;
			});
			state.menuList = result;
		},
	},
});

export const basketActions = basketSlice.actions;
export default basketSlice.reducer;

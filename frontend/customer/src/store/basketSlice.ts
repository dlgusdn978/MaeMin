import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface basketState {
	// orderId, userId, storeId, paymentMethod, requests, table
	totalPrice: number;
	menuList: menuState[];
	pickedMenuPrice: number;
}

const initialState: basketState = {
	totalPrice: 0,
	pickedMenuPrice: 0,
	menuList: [],
};

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		setTotalPrice: (state, action: PayloadAction<number>) => {
			state.totalPrice += action.payload;
		},
		addMenuCount: (state, action: PayloadAction<number>) => {
			const addMenu = state.menuList.findIndex((item) => {
				if (item.index === action.payload) return true;
				else return false;
			});
			if (addMenu < 0) return;
			state.menuList[addMenu].menuCount += 1;
		},
		subMenuCount: (state, action: PayloadAction<number>) => {
			const subMenu = state.menuList.findIndex((item) => {
				if (item.index === action.payload) return true;
				else return false;
			});
			if (subMenu < 0) return;
			state.menuList[subMenu].menuCount -= 1;
		},
		deleteMenu: (state, action: PayloadAction<number>) => {
			console.log(action.payload);
			const deleteMenu = state.menuList.findIndex((item) => {
				console.log('인덱스' + item.index);
				if (item.index === action.payload) return true;
				else return false;
			});
			if (deleteMenu < 0) return;
			const menu = state.menuList[deleteMenu];
			state.totalPrice -= menu.menuPrice * menu.menuCount;
			state.menuList.splice(deleteMenu, 1);
		},
		// userId slice 생성 후 변경할 것
		addParticipant: (state, action: PayloadAction<number>) => {
			const menuIndex = state.menuList.findIndex((item) => {
				if (item.index === action.payload) return true;
				else return false;
			});
			state.menuList[menuIndex].menuPayerList.push('나');
		},
		deleteParticipant: (state, action: PayloadAction<number>) => {
			const list = state.menuList[action.payload].menuPayerList;
			const listIndex = list.indexOf('나');
			list.splice(listIndex, 1);
		},
		setPickedPrice: (state) => {
			state.pickedMenuPrice = 0;
			state.menuList.map((menu) => {
				const temp = menu.menuPayerList.findIndex((item) => {
					if (item === '나') return true;
					else return false;
				});
				if (temp >= 0)
					state.pickedMenuPrice +=
						Math.floor((menu.menuPrice * menu.menuCount) / menu.menuPayerList.length / 10) * 10;
			});
		},
		addMenu: (state, action: PayloadAction<menuState>) => {
			state.menuList.push(action.payload);
		},
	},
});

export const basketActions = basketSlice.actions;

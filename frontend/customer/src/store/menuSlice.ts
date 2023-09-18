// menuSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
	name: string;
	price: string;
}

const initialState: MenuState = {
	name: '',
	price: '',
};

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setMenu: (state, action: PayloadAction<MenuState>) => {
			state.name = action.payload.name;
			state.price = action.payload.price;
		},
	},
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;

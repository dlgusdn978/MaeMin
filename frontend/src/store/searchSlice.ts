import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
	isOpen: boolean;
}

const initialState: SearchState = {
	isOpen: false,
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		openSearch: (state) => {
			state.isOpen = true;
		},
		closeSearch: () => {
			return initialState;
		},
	},
});

// export const { openSearch, closeSearch } = searchSlice.actions;

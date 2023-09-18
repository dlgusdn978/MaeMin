import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { searchSlice } from './searchSlice';
import menuReducer from './menuSlice';

import { basketSlice } from './basketSlice';
const rootReducer = combineReducers({
	search: searchSlice.reducer,
	basket: basketSlice.reducer,
	menu: menuReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

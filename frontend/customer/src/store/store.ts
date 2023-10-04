import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './searchSlice';
import { basketSlice } from './basketSlice';
import { locationSlice } from './locationSlice';
import { secureSlice } from './secureSlice';
import menuReducer from './menuSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
	search: searchSlice.reducer,
	basket: basketSlice.reducer,
	menu: menuReducer,
	location: locationSlice.reducer,
	user: userReducer,
	secure: secureSlice.reducer,
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

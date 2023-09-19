import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
// import type { RootState, AppDispatch } from '../store/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const dispatch = useAppDispatch();

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const navigate = useNavigate();

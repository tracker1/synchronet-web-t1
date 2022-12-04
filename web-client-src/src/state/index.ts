import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppThunk, AppState, AppDispatch } from './store';

export { Context } from './Context';
export { history } from './history'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export type { AppThunk };

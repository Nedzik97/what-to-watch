import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { State, AppDispatch } from '../types/state';

export const useMainPageDispatch = () => useDispatch<AppDispatch>();

export const useMainPageSelector: TypedUseSelectorHook<State> = useSelector;

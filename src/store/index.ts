import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { State, MainPageDispatch } from './state';

export const useMainPageDispatch = () => useDispatch<MainPageDispatch>();

export const useMainPageSelector: TypedUseSelectorHook<State> = useSelector;

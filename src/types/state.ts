import { store } from '../store/index';

export type State = ReturnType <typeof store.getState>;

export type MainPageDispatch = typeof store.dispatch;

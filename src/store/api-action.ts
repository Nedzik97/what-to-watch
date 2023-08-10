import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './index';
import { store } from './index';
import { Films, Film } from '../types/films';
import { loadFilms, loadFilmsToWatch, redirectToRoute, requireAuthorization, getUserData, loadFilmPreview } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';


export const fetchFilmsListAction = createAsyncThunk(
  'data/fetchFilmsList',
  async () => {
    const { data } = await api.get<Films>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  },
);

export const fetchListFilmsToWatch = createAsyncThunk(
  'data/fetchListFilmToWatch',
  async () => {
    const { data } = await api.get<Films>(APIRoute.Favorite);
    store.dispatch(loadFilmsToWatch(data));
  },
);

export const fetchLoadFilmPreview = createAsyncThunk(
  'data/fetchCurrentFilmInfo',
  async (id: number) => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
    store.dispatch(loadFilmPreview(data));
  }
);


export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const LoginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    const { data: { token, avatarUrl } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    store.dispatch(getUserData(avatarUrl));
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    store.dispatch(redirectToRoute(AppRoute.MyList));
  }
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    store.dispatch(redirectToRoute(AppRoute.Root));
  }
);


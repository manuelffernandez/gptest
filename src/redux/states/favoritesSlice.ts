import { type Person } from '@/interfaces';
import {
  getLocalStorage,
  LocalStorageTypes,
  setLocalStorage,
} from '@/utilities';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// The import of RootState is made to write the selector function
// This kind of import type within a slice it's a circular import
// but TS can handle it
import { type RootState } from '@/redux/store';

const INITIAL_STATE: Person[] = [];

export const favoritesSlice = createSlice({
  name: LocalStorageTypes.FAVORITES,
  initialState:
    getLocalStorage(LocalStorageTypes.FAVORITES) !== undefined
      ? (getLocalStorage(LocalStorageTypes.FAVORITES) as Person[])
      : INITIAL_STATE,
  reducers: {
    addFavorite: (state, action: PayloadAction<Person>) => {
      const newFavs = state.concat(action.payload);
      setLocalStorage(LocalStorageTypes.FAVORITES, newFavs);
      return newFavs;
    },
    removeFavorite: (state, action: PayloadAction<Person>) => {
      const newFavs = state.filter(person => person.id !== action.payload.id);
      setLocalStorage(LocalStorageTypes.FAVORITES, newFavs);
      return newFavs;
    },
  },
});

// Action creators are generated for each case reducer function
// These methods returns an object of type Action
// {type: "sliceName/reducerCase", payload}
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = (state: RootState): Person[] => state.favorites;

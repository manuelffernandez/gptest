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

export const peopleSlice = createSlice({
  name: LocalStorageTypes.PEOPLE,
  initialState:
    getLocalStorage(LocalStorageTypes.PEOPLE) !== undefined
      ? (getLocalStorage(LocalStorageTypes.PEOPLE) as Person[])
      : INITIAL_STATE,
  reducers: {
    addPeople: (state, action: PayloadAction<Person[]>) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// These methods returns an object of type Action
// {type: "sliceName/reducerCase", payload}
export const { addPeople } = peopleSlice.actions;

export const selectPeople = (state: RootState): Person[] => state.people;

import { type Person } from '@/interfaces';

export enum LocalStorageTypes {
  PEOPLE = 'people',
  FAVORITES = 'favorites',
}

export const setLocalStorage = (
  key: string,
  state: Person[] | undefined
): void => {
  localStorage.setItem(key, JSON.stringify(state));
};

export const getLocalStorage = (key: string): Person[] | undefined => {
  const people = localStorage.getItem(key);

  if (people != null) {
    return JSON.parse(people);
  }
};

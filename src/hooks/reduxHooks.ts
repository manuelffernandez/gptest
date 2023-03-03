// This separated file containing the useDispatch and useSelector hooks,
// is made by recommendation of Redux toolkit Quick Start tutorial
// more info on:
// https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

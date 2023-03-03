// This separated file containing the useDispatch and useSelector hooks,
// is made by recommendation of Redux toolkit Quick Start tutorial
// more info on:
// https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks

import type { AppDispatch, RootState } from '@/redux/store';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

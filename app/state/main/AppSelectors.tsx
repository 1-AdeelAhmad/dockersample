import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '../../Store';

export const selectMainApp = (state: RootState) => state.app;

export const mainAppSelector = createDraftSafeSelector(selectMainApp, (state) => state);
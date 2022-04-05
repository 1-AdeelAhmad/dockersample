import { createReducer } from '@reduxjs/toolkit';
import { AppState } from '../../../types/app';
import { defaultAction } from './AppActions';

const initialState: AppState = {
    something: '',
};

export const appReducer = createReducer(initialState, (builder) => {
    builder.addCase(defaultAction, (state, { payload }) => {
        state.something = payload.something;
    });
});

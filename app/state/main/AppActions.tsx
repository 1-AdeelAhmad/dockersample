import { createAction } from '@reduxjs/toolkit';

export const defaultAction = createAction('app/defaultAction', () => {
    return {
        payload: {
            something: 'Hello from Redux',
        },
    };
});

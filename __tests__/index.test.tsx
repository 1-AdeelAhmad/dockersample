import * as React from 'react';
import { screen, render } from '@testing-library/react';
import Home from '../pages';
import { Provider } from 'react-redux';
import { store } from '../app/Store';

describe('Home', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });

    it('Renders Home without Errors', () => {
        const component = screen.getByTestId('app');
        expect(component).toBeInTheDocument();
    });
});

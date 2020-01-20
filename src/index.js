import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/AppContainer';

export default function () {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

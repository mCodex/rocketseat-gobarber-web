import React from 'react';
import { Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import history from '~/services/history';

import GlobalStyle from './styles/global';

import '~/config/ReactotronConfig';

import { store, persistor } from './store';

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router history={history}>
                <Helmet>
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <GlobalStyle />
                <Routes />
                <ToastContainer autoClose={3000} />
            </Router>
        </PersistGate>
    </Provider>
);

export default App;

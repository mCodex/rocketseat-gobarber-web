import React from 'react';
import { Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Routes from './routes';

import history from '~/services/history';

import GlobalStyle from './styles/global';

import '~/config/ReactotronConfig';

const App = () => (
    <Router history={history}>
        <Helmet>
            <link
                href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
                rel="stylesheet"
            />
        </Helmet>
        <GlobalStyle />
        <Routes />
    </Router>
);

export default App;

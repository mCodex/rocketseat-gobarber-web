import React, { lazy,Suspense } from 'react';
import { Switch } from 'react-router-dom';
// import SignIn from '~/pages/Signin';
// import SignUp from '~/pages/Signup';

// import Dashboard from '~/pages/Dashboard';
// import Profile from '~/pages/Profile';

import Route from './Route';

const SignIn = lazy(() => import('~/pages/Signin'));
const SignUp = lazy(() => import('~/pages/Signup'));

const Dashboard = lazy(() => import('~/pages/Dashboard'));
const Profile = lazy(() => import('~/pages/Profile'));

export default function Routes() {
    return (
        <Switch>
            <Suspense fallback={<div/>}>
                <Route path="/" exact component={SignIn} />
                <Route path="/register" component={SignUp} />

                <Route path="/dashboard" component={Dashboard} isPrivate />
                <Route path="/profile" component={Profile} isPrivate />
            </Suspense>
            {/* <Route path="/" component={() => <h1>404</h1>} /> */}
        </Switch>
    );
}

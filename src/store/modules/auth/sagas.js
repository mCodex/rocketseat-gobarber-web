import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess, signFailure } from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({ payload: { email, password } }) {
    try {
        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
            toast.error('Usuário não é um prestador');

            return;
        }

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));

        history.push('/dashboard');
    } catch (ex) {
        toast.error('Falha na autenticação, verifique seus dados.');
        yield put(signFailure());
    }
}

export function* signUp({ payload: { name, email, password } }) {
    try {
        yield call(api.post, 'users', {
            name,
            email,
            password,
            provider: true,
        });

        history.push('/');
    } catch (ex) {
        console.tron.log(ex);
        toast.error('Falha no cadastro, verifique seus dados.');
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (!token) {
        return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function signOut() {
    history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
]);

import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess } from './actions';

import history from '~/services/history';
import axios from '~/services/api';

export function* signIn({ payload: { email, password } }) {
    const response = yield call(axios.post, 'sessions', {
        email,
        password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
        console.tron.error('Usuário não é um prestador');
        return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);

import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess, signFailure } from './actions';

import history from '~/services/history';
import axios from '~/services/api';

export function* signIn({ payload: { email, password } }) {
    try {
        const response = yield call(axios.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
            toast.error('Usuário não é um prestador');

            return;
        }

        yield put(signInSuccess(token, user));

        history.push('/dashboard');
    } catch (ex) {
        toast.error('Falha na autenticação, verifique seus dados.');
        yield put(signFailure());
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);

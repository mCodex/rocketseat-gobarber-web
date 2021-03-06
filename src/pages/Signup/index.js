import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string()
        .min(6, 'Mínimo de 6 caracteres')
        .required('A senha é obrigatória'),
});

const SignUp = () => {
    const dispatch = useDispatch();

    const handleSubmit = ({ name, email, password }) =>
        dispatch(signUpRequest(name, email, password));

    return (
        <>
            <img src={logo} alt="GoBarber" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome Completo" />
                <Input type="email" name="email" placeholder="Seu e-mail" />
                <Input
                    type="password"
                    name="password"
                    placeholder="Sua senha"
                />
                <button type="submit">Criar Conta</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
};

export default SignUp;

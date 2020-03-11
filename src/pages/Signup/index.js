import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

const SignUp = () => {
    const handleSubmit = data => {
        console.tron.log(data);
    };

    return (
        <>
            <img src={logo} alt="GoBarber" />
            <Form onSubmit={handleSubmit}>
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

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

const SignUp = () => {
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <form action="post">
                <input name="name" placeholder="Nome Completo" />
                <input type="email" name="email" placeholder="Seu e-mail" />
                <input
                    type="password"
                    name="password"
                    placeholder="Sua senha"
                />
                <button type="submit">Criar Conta</button>
                <Link to="/">Já tenho login</Link>
            </form>
        </>
    );
};

export default SignUp;

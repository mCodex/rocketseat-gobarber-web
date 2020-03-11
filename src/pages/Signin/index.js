import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

const Signin = () => {
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <form action="post">
                <input type="email" name="email" placeholder="Seu e-mail" />
                <input
                    type="password"
                    name="password"
                    placeholder="Sua senha"
                />
                <button type="submit">Acessar</button>
                <Link to="/register">Criar conta gratuita</Link>
            </form>
        </>
    );
};

export default Signin;

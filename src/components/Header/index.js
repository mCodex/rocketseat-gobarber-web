import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import coloredLogo from '~/assets/coloredLogo.svg';

export default function() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={coloredLogo} alt="Go Barber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>Mateus</strong>
                            <Link to="/profile">Meu Perfil</Link>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt="Avatar"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}

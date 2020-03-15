import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Content, Profile } from './styles';

import Notifications from '../Notifications';

import coloredLogo from '~/assets/coloredLogo.svg';

export default function() {
    const profile = useSelector(state => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src={coloredLogo} alt="Go Barber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu Perfil</Link>
                        </div>
                        <img
                            src={
                                profile.avatar.url ||
                                'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }
                            alt="Avatar"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}

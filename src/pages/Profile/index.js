import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

const Profile = () => {
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    const handleSubmit = data => dispatch(updateProfileRequest(data));

    const handleSignOut = () => dispatch(signOut());

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />
                <Input name="name" placeholder="Nome Completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />

                <hr />

                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />

                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />

                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="button" onClick={handleSignOut}>
                Sair
            </button>
        </Container>
    );
};

export default Profile;

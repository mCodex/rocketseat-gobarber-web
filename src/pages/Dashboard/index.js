import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

const Dashboard = () => {
    return (
        <Container>
            <header>
                <button type="button">
                    <MdChevronLeft size={36} color="#fff" />
                </button>
                <strong>31 de maio</strong>
                <button type="button">
                    <MdChevronRight size={36} color="#fff" />
                </button>
            </header>

            <ul>
                <Time past>
                    <strong>08:00</strong>
                    <span>Mateus</span>
                </Time>

                <Time available>
                    <strong>09:00</strong>
                    <span>Mateus</span>
                </Time>
            </ul>
        </Container>
    );
};

export default Dashboard;

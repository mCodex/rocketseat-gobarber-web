import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { utcToZonedTime } from 'date-fns-tz';
import { pt } from 'date-fns/locale';
import {
    format,
    subDays,
    addDays,
    setMinutes,
    setHours,
    setSeconds,
    isBefore,
    isEqual,
    parseISO,
} from 'date-fns';
import { Container, Time } from './styles';

import api from '~/services/api';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const Dashboard = () => {
    const [date, setDate] = useState(new Date());
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const loadSchedule = async () => {
            const response = await api.get('schedule', {
                params: {
                    date,
                },
            });

            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            const data = range.map(hour => {
                const checkDate = setSeconds(
                    setMinutes(setHours(date, hour), 0),
                    0
                );

                const compareDate = utcToZonedTime(checkDate, timezone);

                return {
                    time: `${hour}:00h`,
                    past: isBefore(compareDate, new Date()),
                    appointment: response.data.find(a =>
                        isEqual(parseISO(a.date), compareDate)
                    ),
                };
            });

            setSchedule(data);
        };

        loadSchedule();
    }, [date]);

    const dateFormatted = useMemo(
        () => format(date, "d 'de' MMMM", { locale: pt }),
        [date]
    );

    const handlePrevDate = () => setDate(subDays(date, 1));
    const handleNextDate = () => setDate(addDays(date, 1));

    return (
        <Container>
            <header>
                <button type="button" onClick={handlePrevDate}>
                    <MdChevronLeft size={36} color="#fff" />
                </button>
                <strong>{dateFormatted}</strong>
                <button type="button" onClick={handleNextDate}>
                    <MdChevronRight size={36} color="#fff" />
                </button>
            </header>

            <ul>
                {schedule.map(({ time, past, appointment }) => (
                    <Time key={time} past={past} available={!appointment}>
                        <strong>{time}</strong>
                        <span>
                            {time.appointment
                                ? time.appointment.user.name
                                : 'Em aberto'}
                        </span>
                    </Time>
                ))}
            </ul>
        </Container>
    );
};

export default Dashboard;

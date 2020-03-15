import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
    Container,
    Badge,
    NotificationList,
    Notification,
    Scroll,
} from './styles';

export default () => {
    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const hasUnread = useMemo(
        () => !!notifications.find(notification => notification.read === false),
        [notifications]
    );

    useEffect(() => {
        async function loadNotifications() {
            try {
                const response = await api.get('notifications');

                const data = response.data.map(notification => ({
                    ...notification,
                    timeDistance: formatDistance(
                        parseISO(notification.createdAt),
                        new Date(),
                        { addSuffix: true, locale: pt }
                    ),
                }));
                setNotifications(data);
            } catch (ex) {
                console.tron.log(ex);
            }
        }

        loadNotifications();
    }, []);

    const handleMarkAsRead = async id => {
        await api.put(`notifications/${id}`);

        setNotifications(
            notifications.map(notification =>
                notification._id === id
                    ? { ...notification, read: true }
                    : notification
            )
        );
    };

    const handleToggleVisible = () => setVisible(!visible);

    return (
        <Container>
            <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
                <MdNotifications color="#7159c1" size={20} />
            </Badge>

            <NotificationList visible={visible}>
                <Scroll>
                    {notifications.map(
                        ({ _id, content, read, timeDistance }) => (
                            <Notification unread={!read} key={_id}>
                                <p>{content}</p>
                                <time>{timeDistance}</time>
                                {!read && (
                                    <button
                                        type="button"
                                        onClick={() => handleMarkAsRead(_id)}
                                    >
                                        Marcar como lida
                                    </button>
                                )}
                            </Notification>
                        )
                    )}
                </Scroll>
            </NotificationList>
        </Container>
    );
};

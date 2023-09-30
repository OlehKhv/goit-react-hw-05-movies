import { styled } from 'styled-components';

export const NotFoundNotificationText = styled('h4')(() => ({
    color: '#424D55',
    textAlign: 'center',
    opacity: '0.6',
    fontSize: '24px',
}));

export const ErrorNotificationText = styled(NotFoundNotificationText)(() => ({
    color: '#D61717',
}));

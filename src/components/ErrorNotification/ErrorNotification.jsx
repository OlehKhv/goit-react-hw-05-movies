import { ErrorNotificationText } from './Notification.styled';

const ErrorNotification = ({ children }) => {
    return <ErrorNotificationText>{children}</ErrorNotificationText>;
};

export default ErrorNotification;

import { NotificationSection } from './Notification.styled';

const Notification = (props) => {
  return (
    <NotificationSection
      status={props.status === 'pending' ? null : props.status}
    >
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </NotificationSection>
  );
};

export default Notification;

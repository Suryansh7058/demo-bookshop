import styled from 'styled-components';

export const NotificationSection = styled.section`
  width: 100%;
  height: 3rem;
  background-color: ${(props) =>
    props.status
      ? props.status === 'error'
        ? '#690000'
        : '#1ad1b9'
      : '#1a8ed1'};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 10%;
  align-items: center;
  color: white;

  & h2,
  & p {
    font-size: 1rem;
    margin: 0;
  }
`;

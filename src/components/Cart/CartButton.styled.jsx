import styled from 'styled-components';

export const ButtonCart = styled.button`
  background-color: transparent;
  border-color: #1ad1b9;
  color: #1ad1b9;

  &:hover,
  &:active {
    color: white;
  }

  & span {
    margin: 0 0.5rem;
  }
`;

export const Badge = styled.span`
  background-color: #1ad1b9;
  border-radius: 30px;
  padding: 0.15rem 1.25rem;
  color: #1d1d1d;
`;

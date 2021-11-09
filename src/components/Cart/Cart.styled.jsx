import styled from 'styled-components';
import { Card } from '../UI/Card.styled';

export const CartCard = styled(Card)`
  max-width: 30rem;
  background-color: #313131;
  color: white;

  & h2 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

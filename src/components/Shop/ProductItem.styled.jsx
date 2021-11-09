import styled from 'styled-components';

export const ProductItemLi = styled.li`
  & h3 {
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }

  & header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  & p {
    color: #3a3a3a;
  }
`;

export const ProductPrice = styled.div`
  border-radius: 30px;
  padding: 0.15rem 1.5rem;
  background-color: #3a3a3a;
  color: white;
  font-size: 1.5rem;
`;

export const ProductActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

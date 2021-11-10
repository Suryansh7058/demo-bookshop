import styled from 'styled-components';

export const ItemLi = styled.li`
  margin: 1rem 0;
  background-color: #575757;
  padding: 1rem;

  & h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.75rem;
  }

  & header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Quantity = styled.div`
  & span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
export const ItemPriceSpan = styled.span`
  font-weight: normal;
  font-size: 1rem;
  font-style: italic;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem 0;

  & button {
    background-color: transparent;
    border: 1px solid white;
    margin-left: 0.5rem;
    padding: 0.15rem 1rem;
    color: white;
  }

  & button:hover,
  & button:active {
    background-color: #4b4b4b;
    color: white;
  }
`;

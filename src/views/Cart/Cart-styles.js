import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  min-width: 80vw;
`;

export const StyledItemsWrapper = styled.div`
  width: 80%;

  & > * {
    margin: 5rem 0;
  }
`;

export const StyledPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 5rem;
  right: 5rem;

  & > * {
    margin: 1rem 0;
  }
`;

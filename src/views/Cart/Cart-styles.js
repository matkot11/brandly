import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  /* align-items: flex-end; */
  flex-direction: column;
  justify-content: space-between;
  /* min-width: 80vw; */
`;

export const StyledItemsWrapper = styled.div`
  /* width: 80%; */

  & > * {
    margin: 1rem 0;
  }
`;

export const StyledPriceWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 0.5rem 0;
  }
`;

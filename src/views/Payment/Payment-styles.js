import styled from 'styled-components';

export const StyledInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  /* @media only screen and (max-width: ${({ theme }) => theme.size.m}) {
    flex-direction: column;

    Input {
      &:nth-child(2) {
        margin-top: 2rem;
      }
    }
  } */
`;

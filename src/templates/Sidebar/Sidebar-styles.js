import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    flex-direction: row;
  }
`;

export const StyledInnerWrapper = styled.div`
  margin-top: 5rem;
  justify-self: center;
  align-self: center;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    margin: 5rem auto 0 auto;
  }
`;

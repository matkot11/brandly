import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-content: center;
`;

export const StyledInnerWrapper = styled.div`
  margin-top: 2rem;
  grid-row: 2;
  align-self: center;
  justify-self: center;
  text-align: center;
`;

export const StyledHeading = styled(Heading)`
  margin: 1rem 0;

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.purple};
      text-decoration: underline;
    `}
`;

export const StyledHeadingTitle = styled(Heading)`
  grid-row: 1;
  background-color: ${({ theme }) => theme.white};
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

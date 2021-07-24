import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 80vw;
    flex-direction: row;
  }
`;

export const StyledInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: auto;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin: 0 1rem;
  }
`;

export const StyledMessageWrapper = styled.div`
  margin-top: 1rem;
  width: 90%;
  display: flex;
  align-items: center;
`;

export const StyledHeading = styled(Heading)`
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.white};
  border: none;
  text-decoration: none;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    color: ${({ theme }) => theme.purple};
    text-decoration: underline;
  }
`;

export const StyledMessage = styled(Heading)`
  color: ${({ error, theme }) => (error ? theme.red : theme.green)};
`;

export const StyledHeadingTitle = styled(Heading)`
  background-color: ${({ theme }) => theme.white};
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

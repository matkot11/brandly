import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

export const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledMessageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeading = styled(Heading)`
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

import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledHeading = styled(Heading)`
  background-color: ${({ theme }) => theme.white};
  padding: 1.2rem 1.6rem;
  border: none;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.purple};
    text-decoration: underline;
  }

  :focus {
    outline: none;
  }
`;

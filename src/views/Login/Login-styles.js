import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import { Link } from 'react-router-dom';

export const StyledHeading = styled(Heading)`
  max-width: 40rem;
  color: ${({ theme }) => theme.red};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.darkGrey};
`;

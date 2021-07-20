import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar-component';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const StyledInnerWrapper = styled.div`
  grid-row: 2;
  justify-self: center;
  margin-top: 5rem;
`;

export const StyledNavbar = styled(Navbar)`
  grid-row: 1;
`;

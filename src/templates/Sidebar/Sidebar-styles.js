import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar-component';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const StyledInnerWrapper = styled.div`
  grid-column: 2;
  justify-self: center;
  align-self: center;
  margin-top: 5rem;
`;

export const StyledSidebar = styled(Sidebar)`
  grid-column: 1;
`;

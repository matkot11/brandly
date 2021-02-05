import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledInnerWrapper = styled.div`
  grid-column: 2;
  justify-self: center;
  align-self: center;
  margin-top: 50px;

  @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
    /* grid-row: 2; */
  }
`;

const StyledSidebar = styled(Sidebar)`
  grid-column: 1;

  @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
    /* grid-row: 1; */
  }
`;

const SidebarTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledSidebar />
    <StyledInnerWrapper>{children}</StyledInnerWrapper>
  </StyledWrapper>
);

SidebarTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SidebarTemplate;

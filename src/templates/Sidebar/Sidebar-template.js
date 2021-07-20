import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledInnerWrapper,
  StyledSidebar,
  StyledWrapper,
} from './Sidebar-styles';

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

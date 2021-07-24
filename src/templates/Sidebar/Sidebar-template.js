import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar-component';
import { StyledInnerWrapper, StyledWrapper } from './Sidebar-styles';

const SidebarTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
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

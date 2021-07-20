import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledInnerWrapper,
  StyledNavbar,
  StyledWrapper,
} from './Navbar-styles';

const NavbarTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledNavbar />
    <StyledInnerWrapper>{children}</StyledInnerWrapper>
  </StyledWrapper>
);

NavbarTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default NavbarTemplate;

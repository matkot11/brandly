import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/organisms/Navbar/Navbar-component';
import { StyledWrapper, StyledInnerWrapper } from './Navbar-styles';

const NavbarTemplate = ({ children }) => (
  <StyledWrapper>
    <Navbar />
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

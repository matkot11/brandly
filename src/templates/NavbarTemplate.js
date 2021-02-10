import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const StyledInnerWrapper = styled.div`
  grid-row: 2;
  justify-self: center;
  margin-top: 5rem;
`;

const StyledNavbar = styled(Navbar)`
  grid-row: 1;
`;

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

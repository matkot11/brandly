import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Heading from 'components/atoms/Heading/Heading';
import { routes } from 'routes';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 80vh;
`;

const StyledInnerWrapper = styled.div`
  grid-row: 2;
  align-self: center;
`;

const StyledHeading = styled(Heading)`
  margin: 20px 0;

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.purple};
      text-decoration: underline;
    `}
`;

const StyledHeadingTitle = styled(Heading)`
  grid-row: 1;
  background-color: ${({ theme }) => theme.white};
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const Sidebar = () => {
  const location = useLocation();
  return (
    <StyledWrapper>
      <StyledHeadingTitle title="true" as={Link} to={routes.main}>
        BRANDLY
      </StyledHeadingTitle>
      <StyledInnerWrapper>
        {location.pathname === '/cart/address' ? (
          <StyledHeading active>Address</StyledHeading>
        ) : (
          <StyledHeading large>Address</StyledHeading>
        )}
        {location.pathname === '/cart/payment' ? (
          <StyledHeading active>Payment</StyledHeading>
        ) : (
          <StyledHeading large>Payment</StyledHeading>
        )}

        {location.pathname === '/cart/done' ? (
          <StyledHeading active>Done</StyledHeading>
        ) : (
          <StyledHeading large>Done</StyledHeading>
        )}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};
export default Sidebar;

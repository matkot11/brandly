import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';
import {
  StyledHeading,
  StyledHeadingTitle,
  StyledInnerWrapper,
  StyledWrapper,
} from './Sidebar-styles';

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

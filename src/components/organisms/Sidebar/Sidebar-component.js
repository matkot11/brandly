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
          <StyledHeading large active>
            Address
          </StyledHeading>
        ) : (
          <StyledHeading medium>Address</StyledHeading>
        )}
        {location.pathname === '/cart/payment' ? (
          <StyledHeading large active>
            Payment
          </StyledHeading>
        ) : (
          <StyledHeading medium>Payment</StyledHeading>
        )}

        {location.pathname === '/cart/done' ? (
          <StyledHeading large active>
            Done
          </StyledHeading>
        ) : (
          <StyledHeading medium>Done</StyledHeading>
        )}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};
export default Sidebar;

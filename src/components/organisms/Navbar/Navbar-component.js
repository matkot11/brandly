import React from 'react';
import useLogout from 'composables/useLogout';
import getUser from 'composables/getUser';
import { Link } from 'react-router-dom';
import { routes } from 'routes/index';
import { useSelector, useDispatch } from 'react-redux';
import { getMessageData, getMessage } from 'redux/message/messageSlice';
import { getErrorData } from 'redux/error/errorSlice';
import TextButton from 'components/atoms/TextButton/TextButton';
import CategoriesDropdown from 'components/organisms/CategoriesDropdown/CategoriesDropdown-component';
import CartDropdown from 'components/organisms/CartDropdown/CartDropdown-component';
import {
  StyledButtonsWrapper,
  StyledHeading,
  StyledHeadingTitle,
  StyledInnerWrapper,
  StyledMessage,
  StyledMessageWrapper,
  StyledWrapper,
} from './Navbar-styles';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = getUser();
  const message = useSelector(getMessageData);
  const error = useSelector(getErrorData);
  const dispatch = useDispatch();

  return (
    <StyledWrapper>
      <StyledHeadingTitle title="true" as={Link} to={routes.main}>
        BRANDLY
      </StyledHeadingTitle>
      <StyledInnerWrapper>
        <StyledButtonsWrapper>
          <CategoriesDropdown />
          <CartDropdown />
          {user ? (
            <StyledHeading as="button" onClick={logout}>
              Logout
            </StyledHeading>
          ) : (
            <>
              <StyledHeading as={Link} to={routes.login}>
                Login
              </StyledHeading>
              <StyledHeading as={Link} to={routes.register}>
                Register
              </StyledHeading>
            </>
          )}
        </StyledButtonsWrapper>
        {message && (
          <StyledMessageWrapper>
            <StyledMessage error={error} small>
              {message}
            </StyledMessage>
            <TextButton onClick={() => dispatch(getMessage(''))}>x</TextButton>
          </StyledMessageWrapper>
        )}
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export default Navbar;

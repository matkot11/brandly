import React from 'react';
import styled from 'styled-components';
import useLogout from 'composables/useLogout';
import getUser from 'composables/getUser';
import { Link } from 'react-router-dom';
import { routes } from 'routes/index';
import { useSelector, useDispatch } from 'react-redux';
import { getMessageData, getMessage } from 'redux/message/messageSlice';
import { getErrorData } from 'redux/error/errorSlice';
import TextButton from 'components/atoms/TextButton/TextButton';
import Heading from 'components/atoms/Heading/Heading';
import CategoriesDropdown from 'components/organisms/CategoriesDropdown/CategoriesDropdown';
import CartDropdown from 'components/organisms/CartDropdown/CartDropdown';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > * {
    margin: 10px 0;
  }
`;

const StyledButtonsWrapper = styled.div`
  display: flex;

  & > * {
    margin: 0 25px;
  }
`;

const StyledMessageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.white};
  border: none;
  text-decoration: none;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    color: ${({ theme }) => theme.purple};
    text-decoration: underline;
  }
`;

const StyledMessage = styled(Heading)`
  color: ${({ error, theme }) => (error ? theme.red : theme.green)};
`;

const StyledHeadingTitle = styled(Heading)`
  background-color: ${({ theme }) => theme.white};
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

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

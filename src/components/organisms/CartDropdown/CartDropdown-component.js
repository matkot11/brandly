import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes/index';
import getUser from 'composables/getUser';
import getCollection from 'composables/getCollection';
import { getMessageData } from 'redux/message/messageSlice';
import { useSelector } from 'react-redux';
import Heading from 'components/atoms/Heading/Heading';
import {
  StyledButton,
  StyledDropdown,
  StyledHeading,
  StyledImg,
  StyledItem,
} from './CartDropdown-styles';

const CartDropdown = () => {
  const { user } = getUser();
  const { results, loadData } = getCollection();
  const message = useSelector(getMessageData);

  useEffect(async () => {
    if (user) {
      await loadData(user.uid);
    }
  }, [user, message]);

  return (
    <StyledDropdown name="Cart">
      {user ? (
        results &&
        (results.length === 0 ? (
          <StyledHeading medium>No items</StyledHeading>
        ) : (
          <Heading>
            {results.map((result) => (
              <StyledItem key={result.id}>
                <StyledImg src={result.image} alt="item" />
                <Heading small>
                  {result.price}
                  <span>£</span>
                </Heading>
              </StyledItem>
            ))}
            <StyledButton width="max-content" as={Link} to={routes.cart}>
              Go to checkout
            </StyledButton>
          </Heading>
        ))
      ) : (
        <>
          <StyledHeading medium> Login to see your cart</StyledHeading>
          <StyledButton width="max-content" as={Link} to={routes.login}>
            Login
          </StyledButton>
        </>
      )}
    </StyledDropdown>
  );
};

export default CartDropdown;

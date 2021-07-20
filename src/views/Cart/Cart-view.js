import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getMessageData } from 'redux/message/messageSlice';
import getCollection from 'composables/getCollection';
import getUser from 'composables/getUser';
import NavbarTemplate from 'templates/Navbar/Navbar-template';
import CartItem from 'components/molecules/CartItem/CartItem-component';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { routes } from 'routes/index';
import {
  StyledItemsWrapper,
  StyledPriceWrapper,
  StyledWrapper,
} from './Cart-styles';

const Cart = () => {
  const { user } = getUser();
  const { results, loadData, total } = getCollection();
  const message = useSelector(getMessageData);

  useEffect(async () => {
    if (user) {
      await loadData(user.uid);
    }
  }, [user, message]);

  return (
    <NavbarTemplate>
      {results ? (
        <StyledWrapper>
          <StyledItemsWrapper>
            {results.map((result) => (
              <CartItem
                key={result.id}
                id={result.id}
                image={result.image}
                name={result.name}
                price={result.price}
              />
            ))}
          </StyledItemsWrapper>
          <StyledPriceWrapper>
            <Heading large>Total: {total}£</Heading>
            <Button to={routes.address}>Go to checkout</Button>
          </StyledPriceWrapper>
        </StyledWrapper>
      ) : (
        <h1>Loading...</h1>
      )}
    </NavbarTemplate>
  );
};
export default Cart;

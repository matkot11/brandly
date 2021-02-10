import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getMessageData } from 'redux/message/messageSlice';
import getCollection from 'composables/getCollection';
import getUser from 'composables/getUser';
import NavbarTemplate from 'templates/NavbarTemplate';
import CartItem from 'components/molecules/CartItem/CartItem';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { routes } from 'routes/index';

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  min-width: 80vw;
`;

const StyledItemsWrapper = styled.div`
  width: 80%;
  @media only screen and (max-width: ${({theme}) => theme.size.m}) {
    margin: auto;
  }

  & > * {
    margin: 5rem 0;
  }
`;

const StyledPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 5rem;
  right: 5rem;

  & > * {
    margin: 1rem 0;
  }
`;

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

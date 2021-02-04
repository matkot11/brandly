import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes/index';
import styled from 'styled-components';
import getUser from 'composables/getUser';
import getCollection from 'composables/getCollection';
import Dropdown from 'components/molecules/Dropdown/Dropdown';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { getMessageData } from 'redux/message/messageSlice';
import { useSelector } from 'react-redux';

const StyledDropdown = styled(Dropdown)`
  display: flex;
  flex-direction: column;
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0;
`;

const StyledImg = styled.img`
  max-width: 90px;
  max-height: 80px;
  margin-right: 5px;
  border-radius: 5px;
`;

const StyledButton = styled(Button)`
  margin: 10px;
`;

const StyledHeading = styled(Heading)`
  margin: 10px;
`;

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

import React, { useEffect } from 'react';
import styled from 'styled-components';
import SidebarTemplate from 'templates/SidebarTemplate';
import Form from 'components/organisms/Form/Form';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { routes } from 'routes';
import getUser from 'composables/getUser';
import getCollection from 'composables/getCollection';

const StyledInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media only screen and (max-width: ${({theme}) => theme.size.m}) {
    flex-direction: column;

    Input {
      &:nth-child(2) {
        margin-top: 20px;
      }
    }
  }
`;

const Payment = () => {
  const { user } = getUser();
  const { loadData, total } = getCollection();

  useEffect(async () => {
    if (user) {
      await loadData(user.uid);
    }
  }, [user]);

  return (
    <SidebarTemplate>
      <Form title="Payment">
        <Input placeholder="Name on card" />
        <Input placeholder="Card number" />
        <StyledInnerWrapper>
          <Input small placeholder="MM / YY" />
          <Input small placeholder="CVC" />
        </StyledInnerWrapper>
        <Button to={routes.done}>Pay {total}£</Button>
      </Form>
    </SidebarTemplate>
  );
};
export default Payment;

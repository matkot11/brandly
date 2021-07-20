import React, { useEffect } from 'react';
import SidebarTemplate from 'templates/Sidebar/Sidebar-template';
import Form from 'components/organisms/Form/Form-component';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { routes } from 'routes';
import getUser from 'composables/getUser';
import getCollection from 'composables/getCollection';
import { StyledInnerWrapper } from './Payment-styles';

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

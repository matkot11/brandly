import React from 'react';
import styled from 'styled-components';
import SidebarTemplate from 'templates/SidebarTemplate';
import Form from 'components/organisms/Form/Form';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { routes } from 'routes';


const StyledInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Payment = () => (
  <SidebarTemplate>
    <Form title="Payment">
      <Input placeholder="Name on card" />
      <Input placeholder="Card number" />
      <StyledInnerWrapper>
        <Input small placeholder="MM / YY" />
        <Input small placeholder="CVC" />
      </StyledInnerWrapper>
      <Button to={routes.done}>Pay</Button>
    </Form>
  </SidebarTemplate>
);

export default Payment;


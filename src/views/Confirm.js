import React from 'react';
import styled from 'styled-components';
import SidebarTemplate from 'templates/SidebarTemplate';
import Form from 'components/organisms/Form/Form';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 80vw;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const StyledPaymentWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > Button {
    margin-top: 50px;
  }
`;

const Confirm = () => (
  <SidebarTemplate>
    <StyledWrapper>
      <Form title="Address confirmation">
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="Street name" />
        <Input placeholder="Street number" />
        <Input placeholder="Postcode" />
        <Input placeholder="Town / city" />
      </Form>
      <StyledPaymentWrapper>
        <Form title="Payment">
          <Input placeholder="Name on card" />
          <Input placeholder="Card number" />
          <StyledInnerWrapper>
            <Input small placeholder="MM / YY" />
            <Input small placeholder="CVC" />
          </StyledInnerWrapper>
        </Form>
        <Button>Buy</Button>
      </StyledPaymentWrapper>
    </StyledWrapper>
  </SidebarTemplate>
);

export default Confirm;

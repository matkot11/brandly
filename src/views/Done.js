import React, { useEffect } from 'react';
import styled from 'styled-components';
import SidebarTemplate from 'templates/SidebarTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import TextButton from 'components/atoms/TextButton/TextButton';
import { routes } from 'routes';
import useLogout from 'composables/useLogout';
import { firestore } from 'firebase/config';
import getUser from 'composables/getUser';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    text-align: center;
  }

  & > * {
    margin: 20px 0;
  }
`;

const Done = () => {
  const { logout } = useLogout();
  const { user } = getUser();

  useEffect(() => {
    if (user) {
      firestore
        .collection(user.uid)
        .get()
        .then((doc) => {
          doc.forEach((item) => {
            item.ref.delete();
          });
        });
    }
  }, [user]);

  return (
    <SidebarTemplate>
      <StyledWrapper>
        <Heading title="true">Success</Heading>
        <Heading>Thank you for purchase</Heading>
        <Button to={routes.main}>Main page</Button>
        <TextButton onClick={logout}>Logout</TextButton>
      </StyledWrapper>
    </SidebarTemplate>
  );
};
export default Done;

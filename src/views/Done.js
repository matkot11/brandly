import React, { useEffect } from 'react';
import styled from 'styled-components';
import SidebarTemplate from 'templates/SidebarTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import TextButton from 'components/atoms/TextButton/TextButton';
import getUser from 'composables/getUser';
import getCollection from 'composables/getCollection';
import { routes } from 'routes';
import useLogout from 'composables/useLogout';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
`;

const StyledImgWrapper = styled.div`
  display: flex;

  & > * {
    margin: 20px 50px;
  }
`;

const StyledImg = styled.img`
  max-width: 300px;
  max-height: 300px;
  border-radius: 5px;
`;

const Done = () => {
  const { user } = getUser();
  const { results, loadData } = getCollection();
  const { logout } = useLogout();

  useEffect(async () => {
    if (user) {
      await loadData(user.uid);
    }
  }, [user]);

  return (
    <SidebarTemplate>
      <StyledWrapper>
        <Heading title="true">Congratulations🎉🎉</Heading>
        <StyledImgWrapper>
          {results ? (
            results.map((result) => (
              <StyledImg key={result.id} src={result.image} />
            ))
          ) : (
            <Heading>Loading...</Heading>
          )}
        </StyledImgWrapper>
        <Heading>^</Heading>
        <Heading>Now it&apos;s yours!</Heading>
        <Button to={routes.main}>Main page</Button>
        {user && <TextButton onClick={logout}>Logout</TextButton>}
      </StyledWrapper>
    </SidebarTemplate>
  );
};
export default Done;

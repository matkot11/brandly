import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    width: 100%;
    text-align: center;
  }

  & > * {
    margin: 2rem 0;
  }
`;

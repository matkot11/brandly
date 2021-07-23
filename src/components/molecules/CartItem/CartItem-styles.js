import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  /* align-self: center; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* margin: 2rem; */

  & > * {
    margin-top: 1rem;
  }
`;

export const StyledInnerWrapper = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImg = styled.img`
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 5px;
  margin: 0 1rem 1rem 0;
`;

export const StyledHeading = styled(Heading)`
  /* max-width: 30rem; */
`;

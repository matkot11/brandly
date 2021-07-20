import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImg = styled.img`
  max-width: 25rem;
  max-height: 25rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const StyledHeading = styled(Heading)`
  max-width: 30rem;
`;

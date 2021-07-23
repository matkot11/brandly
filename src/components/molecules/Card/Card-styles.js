import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.lightGrey};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledImg = styled.img`
  border-radius: 5px 5px 0 0;
  object-fit: contain;
  width: 20rem;
  height: 20rem;
  padding: 1rem;
`;

export const StyledButton = styled(Button)`
  position: relative;
  top: 25px;
`;

export const StyledHeadingWrapper = styled.div`
  margin: 1.5rem 0 0 0;
  /* max-width: 22rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export const StyledHeading = styled(Heading)`
  margin: 0 0 1rem 0;
  text-align: center;
  font-weight: ${({ theme }) => theme.light};
`;

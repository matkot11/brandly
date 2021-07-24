import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.lightGrey};

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    width: 20rem;
  }
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

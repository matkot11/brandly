import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > * {
    margin-bottom: 2rem;

    @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
      margin-bottom: 5rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 50vw;
    flex-direction: row;
  }
`;

export const StyledInnerWrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 30vw;
  }
`;

export const StyledPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImg = styled.img`
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 5px;
`;

export const StyledHeading = styled(Heading)`
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 60%;
  }
`;

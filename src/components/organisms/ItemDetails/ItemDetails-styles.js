import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > * {
    margin: 0 2rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    flex-direction: row;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 1.2rem 0;
  }
`;

export const StyledImg = styled.img`
  max-width: 10rem;
  border-radius: 5px;

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    max-width: 15rem;
  }
`;

export const StyledHeading = styled(Heading)`
  max-width: 50rem;
  align-self: center;
  text-align: center;
`;

export const StyledParagraph = styled(Paragraph)`
  margin-top: 2rem;
  font-size: 1.7rem;
  max-width: 52.1rem;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    font-size: 2rem;
  }
`;

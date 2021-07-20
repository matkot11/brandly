import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > * {
    margin: 0 2rem;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 2rem 0;
  }
`;

export const StyledImg = styled.img`
  max-width: 30rem;
  border-radius: 5px;
`;

export const StyledHeading = styled(Heading)`
  align-self: center;
  max-width: 50rem;
`;

export const StyledParagraph = styled(Paragraph)`
  margin-top: 2rem;
  max-width: 52.1rem;
`;

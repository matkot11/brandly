import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  width: max-content;
  padding: 2rem;
  background-color: ${({ theme }) => theme.lightGrey};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 1rem 0;
  }
`;

export const StyledHeading = styled(Heading)`
  margin: 2rem 0;
  align-self: left;
`;

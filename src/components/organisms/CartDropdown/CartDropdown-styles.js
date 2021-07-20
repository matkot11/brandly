import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Dropdown from 'components/molecules/Dropdown/Dropdown-component';

export const StyledDropdown = styled(Dropdown)`
  display: flex;
  flex-direction: column;
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 1rem 0;
`;

export const StyledImg = styled.img`
  max-width: 9rem;
  max-height: 8rem;
  margin-right: 5px;
  border-radius: 5px;
`;

export const StyledButton = styled(Button)`
  margin: 1rem;
`;

export const StyledHeading = styled(Heading)`
  margin: 1rem;
`;

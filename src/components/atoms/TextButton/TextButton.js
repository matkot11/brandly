import styled from 'styled-components';

const TextButton = styled.button`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  border: none;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :active {
    color: ${({ theme }) => theme.black};
  }
`;

export default TextButton;

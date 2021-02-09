import styled, { css } from 'styled-components';

const Input = styled.input`
  width: 424px;
  height: 54px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.fontSize.m};

  @media only screen and (max-width: ${({theme}) => theme.size.m}) {
    width: 300px;
    height: 40px;
  }

  @media only screen and (max-width: ${({theme}) => theme.size.s}) {
    width: 220px;
  }

  ${({ small }) =>
    small &&
    css`
      width: 143px;
    `}

  ${({ quantity }) =>
    quantity &&
    css`
      width: 105px;
      height: 44px;
      border: 1px solid ${({ theme }) => theme.black};
    `}

  :focus {
    outline: none;
    border-bottom: solid 5px ${({ theme }) => theme.purple};
  }
`;

export default Input;

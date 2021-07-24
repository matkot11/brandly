import styled, { css } from 'styled-components';

const Heading = styled.h1`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    font-size: 1.8rem;
  }

  ${({ title }) =>
    title &&
    css`
      font-size: 3rem;
      font-weight: ${({ theme }) => theme.bold};
      letter-spacing: 3px;
      text-decoration: none;

      @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
    `}

  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
    `}
`;

export default Heading;

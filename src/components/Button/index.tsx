import styled, { css } from "styled-components";

interface ButtonProps {
  "data-testid"?: string;
}

const PrimaryButton = styled.button<ButtonProps>`
  ${({ theme }) => css`
    border: none;
    border-radius: 0.25rem;
    display: inline-block;
    position: relative;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    margin: 0;
    cursor: pointer;
    vertical-align: baseline;
    font-size: ${theme.fontSizes.button};
    padding: 0.75rem 1rem;
    line-height: 1.5;
    letter-spacing: 0.025rem;
    outline: none;
    text-transform: uppercase;

    color: ${theme.colors.white};
    background: ${theme.colors.primary};

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
    }
  `}
`;

export default PrimaryButton;

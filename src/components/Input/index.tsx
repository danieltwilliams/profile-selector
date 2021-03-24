import React from "react";
import styled, { css } from "styled-components/macro";

interface InputProps {
  "data-testid"?: string;
  error: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<{ error: boolean }>`
  ${({ theme, error }) => css`
    font-size: ${theme.fontSizes.base};
    width: 100%;
    box-sizing: border-box;
    height: ${theme.dimensions.inputHeight};
    padding: ${theme.ruler[2]}px;
    border: 1px solid;
    border-radius: ${theme.borderRadius.input};

    ${error &&
    css`
      border-color: ${theme.colors.danger};
      outline: none;
    `}
  `}
`;

const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: red;
    margin-top: ${theme.ruler[1]};
    font-size: ${theme.fontSizes.caption};
  `}
`;

const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & InputProps
> = ({
  "data-testid": qaId = "input",
  placeholder,
  onChange,
  value,
  name,
  error,
  disabled,
}) => {
  return (
    <>
      <StyledInput
        disabled={disabled}
        error={error}
        placeholder={placeholder}
        value={value}
        name={name}
        type="text"
        onChange={onChange}
        data-testid={`${qaId}`}
      />
      {error && (
        <ErrorMessage data-testid="error-message">
          There's been a problem :(
        </ErrorMessage>
      )}
    </>
  );
};

export default Input;

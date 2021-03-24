import React from "react";
import styled, { css } from "styled-components/macro";

interface LabelProps {
  "data-testid"?: string;
  error: boolean;
}

const StyledLabel = styled.label<{ error: boolean }>`
  ${({ theme, error }) => css`
    margin-bottom: ${theme.ruler[3]}px;
    display: block;

    ${error &&
    css`
      color: ${theme.colors.danger};
    `}
  `}
`;

const Label: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & LabelProps
> = ({ "data-testid": qaId = "label", name, error }) => {
  debugger;
  return (
    <StyledLabel error={error} htmlFor={name} data-testid={`${qaId}`}>
      {name}
    </StyledLabel>
  );
};

export default Label;

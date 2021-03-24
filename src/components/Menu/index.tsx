import React from "react";
import styled, { css } from "styled-components/macro";

interface MenuProps {
  "data-testid"?: string;
  children: any;
  hide?: boolean;
}

const StyledMenu = styled.ul<{ hide?: boolean }>`
  ${({ theme, hide }) => css`
    margin-top: 0px;
    display: block;
    padding: 0px;
    background-color: ${theme.colors.white};
    box-shadow: rgb(0 0 0 / 19%) 0px 10px 20px 0px;

    ${hide &&
    css`
      display: none;
    `}
  `}
`;

const Menu: React.FC<MenuProps> = ({
  "data-testid": qaId = "menu",
  children,
  hide,
}) => {
  return (
    <StyledMenu role="menu" hide={hide} data-testid={`${qaId}`}>
      {children}
    </StyledMenu>
  );
};

export default Menu;

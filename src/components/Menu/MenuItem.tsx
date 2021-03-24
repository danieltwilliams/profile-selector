import React from "react";
import styled, { css } from "styled-components/macro";

interface MenuItemProps {
  "data-qaid"?: string;
  children: any;
  onSelect?: (e: any) => void;
}

const StyledMenuItem = styled.li`
  ${({ theme }) => css`
    padding: ${theme.ruler[2]}px;
    list-style: none;
    background-color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.grey};
      cursor: pointer;
    }
  `}
`;

const MenuItem: React.FC<MenuItemProps> = ({
  "data-qaid": qaId = "menu-item",
  children,
  onSelect,
}) => {
  return (
    <StyledMenuItem role="menuitem" onClick={onSelect} data-testid={`${qaId}`}>
      {children}
    </StyledMenuItem>
  );
};

export default MenuItem;

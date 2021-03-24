import { renderWithTheme } from "../../__test__/utils";
import { screen, fireEvent } from "@testing-library/react";
import MenuItemComp from "./MenuItem";

let menuItemClick = jest.fn();

describe("MenuItem", () => {
  test("renders correctly and fires the on click callback", () => {
    renderWithTheme(
      <MenuItemComp onSelect={menuItemClick}>Cardiff</MenuItemComp>
    );

    let MenuItem = screen.getByTestId("menu-item");
    fireEvent.click(MenuItem);
    expect(menuItemClick).toHaveBeenCalled();
  });
});

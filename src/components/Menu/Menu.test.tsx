import { renderWithTheme } from "../../__test__/utils";
import { screen } from "@testing-library/react";
import MenuComp from "./index";

describe("Menu", () => {
  it("renders correctly", () => {
    renderWithTheme(<MenuComp>Child Item</MenuComp>);
    let Menu = screen.getByTestId("menu");
    expect(Menu).toBeInTheDocument();
  });
});

import { renderWithTheme } from "../../__test__/utils";
import { screen, fireEvent } from "@testing-library/react";
import InputComp from "./index";

let inputClick = jest.fn();

describe("Input", () => {
  it("renders correctly", () => {
    renderWithTheme(
      <InputComp
        name="Cardiff"
        value="Default Value"
        error={false}
        onChange={inputClick}
      />
    );

    let Input = screen.getByTestId("input");
    expect(Input).toBeInTheDocument();
    expect(Input).not.toHaveStyle("border-color: red");
    expect(Input).toHaveAttribute("name");
    fireEvent.change(Input, { target: { value: "23" } });
    expect(inputClick).toHaveBeenCalled();
  });

  it("displays an error state", () => {
    renderWithTheme(
      <InputComp
        name="Cardiff"
        value="Default Value"
        error={true}
        onChange={inputClick}
      />
    );

    let Input = screen.getByTestId("input");
    expect(Input).toBeInTheDocument();
    expect(Input).toHaveStyle("border-color: red");
    expect(screen.getByText("There's been a problem :(")).toBeInTheDocument();
  });
});

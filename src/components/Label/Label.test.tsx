import { renderWithTheme } from "../../__test__/utils";
import { screen } from "@testing-library/react";
import LabelComp from "./index";

describe("Label", () => {
  it("renders correctly", () => {
    renderWithTheme(<LabelComp name="Cardiff" error={false} />);

    let Label = screen.getByTestId("label");
    expect(Label).toBeInTheDocument();
    expect(Label).not.toHaveStyle("color: rgb(255, 0, 0)");
    expect(Label).toHaveTextContent("Cardiff");
  });

  /* it("displays an error state") */
});

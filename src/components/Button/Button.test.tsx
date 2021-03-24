import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import { renderWithTheme } from "../../__test__/utils";
import PrimaryButton from "./index";

describe("Button", () => {
  test("it renders correctly", async () => {
    const container = renderWithTheme(
      <PrimaryButton data-testid="primaryButton" />
    );
    expect(container).toMatchSnapshot();
  });
});

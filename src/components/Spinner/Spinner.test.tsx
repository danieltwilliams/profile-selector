import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { renderWithTheme } from "../../__test__/utils";
import Spinner from "./index";

describe("Spinner", () => {
  test("it renders correctly", async () => {
    const container = renderWithTheme(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});

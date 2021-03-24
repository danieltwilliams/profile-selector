import { renderWithTheme } from "../../__test__/utils";
import { screen, fireEvent } from "@testing-library/react";
import TypeaheadComp from "./index";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
let menuItemClick = jest.fn();

afterEach(() => {
  mockedAxios.get.mockClear();
});

describe("Typeahead", () => {
  it("renders correctly", async () => {
    const response = [
      { name: "Cardiff", id: 2 },
      { name: "Cardigan", id: 7 },
    ];

    renderWithTheme(
      <TypeaheadComp
        label="I am label"
        error={false}
        data={response}
        onMenuSelect={menuItemClick}
      />
    );

    mockedAxios.get.mockResolvedValue(response);

    let Input = screen.getByTestId("input");
    fireEvent.change(Input, { target: { value: "Cardiff" } });

    let MenuItems = screen.getAllByTestId("menu-item");
    expect(MenuItems.length).toBe(1);
    let firstMenuItem = screen.getAllByTestId("menu-item")[0];

    fireEvent.click(firstMenuItem);
    expect(menuItemClick).toHaveBeenCalled();
    expect(menuItemClick).toHaveBeenCalledWith({ id: 2, name: "Cardiff" });
  });
});

import App from "../../App";
import axios from "axios";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

let fakeResponse = [
  {
    name: "daniel",
    id: 1,
    image: "https://i.pravatar.cc/150?img=25",
    nationality: "Welsh",
    jobTitle: "software engineer",
    favouriteFood: "It changes daily",
    skills: [
      { id: 1, name: "juggling", value: false },
      { id: 2, name: "lion tamer", value: false },
      { id: 3, name: "coffee addict", value: true },
      { id: 4, name: "surfing", value: true },
      { id: 5, name: "tennis", value: true },
    ],
  },
  {
    name: "dylan",
    id: 2,
    image: "https://i.pravatar.cc/150?img=39",
    nationality: "English",
    jobTitle: "Juior Engineer",
    favouriteFood: "Burgers",
    skills: [{ id: 2, name: "juggling", value: false }],
  },
];

test.skip("User can search for a user profile", async () => {
  // Mock App
  const app = (
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  mockedAxios.get.mockResolvedValue(fakeResponse);

  let { getByTestId, getAllByTestId } = render(app);

  let typeaheadInput = getByTestId("input");
  fireEvent.change(typeaheadInput, { target: { value: "daniel" } });

  let firstMenuItem = getAllByTestId("menu-item")[0];
  fireEvent.click(firstMenuItem);

  let selectedProfileName = getByTestId("profile-name-daniel-williams");
  expect(selectedProfileName).toBeInTheDocument();
});

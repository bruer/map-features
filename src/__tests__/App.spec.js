import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../components/App";

test("it should show correct error message when no input is given", async () => {
  const { getByLabelText, getByText, findByText } = render(<App />);

  const minLongInput = getByLabelText(/minimum longitude/i);
  const minLatInput = getByLabelText(/minimum latitude/i);
  const maxLongInput = getByLabelText(/maximum longitude/i);
  const maxLatInput = getByLabelText(/maximum latitude/i);
  const button = getByText(/geojson/i);

  expect(minLongInput).toHaveAttribute("value", "");
  expect(minLatInput).toHaveAttribute("value", "");
  expect(maxLongInput).toHaveAttribute("value", "");
  expect(maxLatInput).toHaveAttribute("value", "");
  userEvent.click(button);

  await findByText(/bbox is required/i);
});

test("it should show correct error message when given coordinates doesn't adhere to rules specified by OSM API", async () => {
  const { getByLabelText, getByText, findByText } = render(<App />);

  const minLongInput = getByLabelText(/minimum longitude/i);
  const minLatInput = getByLabelText(/minimum latitude/i);
  const maxLongInput = getByLabelText(/maximum longitude/i);
  const maxLatInput = getByLabelText(/maximum latitude/i);
  const button = getByText(/geojson/i);

  userEvent.type(minLongInput, "3");
  userEvent.type(minLatInput, "2");
  userEvent.type(maxLongInput, "1");
  userEvent.type(maxLatInput, "0");
  userEvent.click(button);

  await findByText(/the minima must be less than the maxima/i);
});

test("it should show correct error message when the requested bbox size is too large", async () => {
  const { getByLabelText, getByText, findByText } = render(<App />);

  const minLongInput = getByLabelText(/minimum longitude/i);
  const minLatInput = getByLabelText(/minimum latitude/i);
  const maxLongInput = getByLabelText(/maximum longitude/i);
  const maxLatInput = getByLabelText(/maximum latitude/i);
  const button = getByText(/geojson/i);

  userEvent.type(minLongInput, "0");
  userEvent.type(minLatInput, "1");
  userEvent.type(maxLongInput, "2");
  userEvent.type(maxLatInput, "3");
  userEvent.click(button);

  await findByText(/your request was too large/i);
});

test("it should show throw an error when the response doesn't have valid OSM data", async () => {
  const { getByText, getByLabelText, findByText } = render(<App />);

  const minLongInput = getByLabelText(/minimum longitude/i);
  const minLatInput = getByLabelText(/minimum latitude/i);
  const maxLongInput = getByLabelText(/maximum longitude/i);
  const maxLatInput = getByLabelText(/maximum latitude/i);
  const button = getByText(/geojson/i);

  userEvent.type(minLongInput, "93.09333");
  userEvent.type(minLatInput, "74.31357");
  userEvent.type(maxLongInput, "93.09908");
  userEvent.type(maxLatInput, "74.31448");
  userEvent.click(button);

  await findByText(/unable to find any osm data/i);
});

test("it should show requested OSM data on the map", async () => {
  const { getByLabelText, getByText, findByText, container } = render(<App />);

  const minLongInput = getByLabelText(/minimum longitude/i);
  const minLatInput = getByLabelText(/minimum latitude/i);
  const maxLongInput = getByLabelText(/maximum longitude/i);
  const maxLatInput = getByLabelText(/maximum latitude/i);
  const button = getByText(/geojson/i);

  userEvent.type(minLongInput, "13.37084");
  userEvent.type(minLatInput, "59.96254");
  userEvent.type(maxLongInput, "13.39385");
  userEvent.type(maxLatInput, "59.96929");
  userEvent.click(button);

  await findByText(/loading/i);
  await findByText(/leaflet/i);

  await waitFor(() =>
    expect(container.querySelectorAll(".leaflet-marker-icon")).toHaveLength(1),
    expect(container.querySelectorAll("path")).toHaveLength(0)
  );
});

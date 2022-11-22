import "react-native";
import React from "react";
import Home from "pages/Home";
import { render } from "@testing-library/react-native";

describe("test render Login screen", () => {
  it("renders correctly", () => {
    const { getByText, toJSON } = render(<Home />);
    getByText("Log out");
    expect(toJSON()).toMatchSnapshot();
  });
});

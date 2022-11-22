import "react-native";
import React from "react";
import Button from "components/Button";
import { fireEvent, render } from "@testing-library/react-native";

describe("test render button component with title button", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText, toJSON } = render(
      <Button title="button" />
    );
    getByText("button");
    expect(toJSON()).toMatchSnapshot();
  });
});

describe("test render and click button component", () => {
  it("renders correctly", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button title="button" onPress={onClick} />);
    const buttonStyled = getByTestId("buttonStyled");
    console.log(buttonStyled);
    fireEvent.press(buttonStyled);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

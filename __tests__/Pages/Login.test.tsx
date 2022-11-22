import "react-native";
import React from "react";
import Login from "pages/Login";
import { fireEvent, render } from "@testing-library/react-native";


jest.mock(
  'react-native-vector-icons/FontAwesome',
  () => 'MockedFontAwesome',
);

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});


describe("test render Login screen", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText, toJSON } = render(
      <Login  />
    );
    getByText("Login");
    expect(toJSON()).toMatchSnapshot();
  });
});

// describe("test render and click button component", () => {
//   it("renders correctly", () => {
//     const onClick = jest.fn();
//     const { getByTestId } = render(<Button title="button" onPress={onClick} />);
//     const buttonStyled = getByTestId("buttonStyled");
//     fireEvent.press(buttonStyled);
//     expect(onClick).toHaveBeenCalledTimes(1);
//   });
// });

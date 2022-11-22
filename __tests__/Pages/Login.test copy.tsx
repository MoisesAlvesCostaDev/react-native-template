import "react-native";
import React from "react";
import Login from "pages/Login";
import { fireEvent, render } from "@testing-library/react-native";

jest.mock("react-native-vector-icons/FontAwesome", () => "MockedFontAwesome");

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
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
    const { getByText, toJSON } = render(<Login />);
    getByText("Login");
    getByText("Digite seu e-mail");
    getByText("Digite sua senha");
    getByText("Enviar");
    getByText("Esqueci minha senha!");

    expect(toJSON()).toMatchSnapshot();
  });
});

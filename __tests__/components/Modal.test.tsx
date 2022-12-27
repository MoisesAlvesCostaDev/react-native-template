import "react-native";
import React from "react";
import Modal from "components/Modal";
import { fireEvent, render } from "@testing-library/react-native";


describe("test render component with title and message default", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText, toJSON } = render(
      <Modal modalVisible = {true} setModalVisible={()=>{true}} />
    );
    getByText("Não foi possível entrar");
    getByText("Usuáro ou senha inválidos");
    expect(toJSON()).toMatchSnapshot();
  });
});

describe("test render and click button ok", () => {
  it("renders correctly", () => {
    const { getByTestId } = render( <Modal modalVisible = {true} setModalVisible={()=>{true}} />);
    const buttonStyled = getByTestId("buttonStyled");
    fireEvent.press(buttonStyled);
  });
});

import React  from "react";
import { Modal as ReactModal} from "react-native";
import * as styled from "./styles";
import { TitleScreen } from "assets/styles/Screen";

const Modal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  return (
    <styled.CenteredView>
      <ReactModal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <styled.CenteredView>
          <styled.ModalView>
            <styled.HeaderView>
              <TitleScreen>Não foi possível entrar</TitleScreen>
            </styled.HeaderView>
            <styled.BodyView>
              <styled.MessageText>Usuáro ou senha inválidos</styled.MessageText>
            </styled.BodyView>
            <styled.FooterView>
              <styled.ModalButton
              testID="buttonStyled"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <styled.ButtomText>Ok</styled.ButtomText>
              </styled.ModalButton>
            </styled.FooterView>
          </styled.ModalView>
        </styled.CenteredView>
      </ReactModal>
    </styled.CenteredView>
  );
};

export default Modal;

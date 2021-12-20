import React, { useRef } from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import {
  Screen,
  TitleScreen,
  HeaderContainer,
  ImageHeaderContainer,
} from "assets/styles/Screen";
import { BodyContainer, ForgotPasswordText } from "./styles";
import { Form } from "@unform/mobile";
import { SubmitHandler, FormHandles } from "@unform/core";
import TextInput from "components/forms/TextInput";
import PasswordInput from "components/forms/PasswordInput";

import Button from "components/Button";

interface FormData {
  name: string;
  email: string;
}

const ForgotPassword = function ForgotPassword(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef.current?.getData());
  };

  return (
    <Screen>
      <HeaderContainer>
        <ImageHeaderContainer>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ height: 120, width: 120 }}
          />
        </ImageHeaderContainer>
        <TitleScreen>Recuperar senha solicitar código</TitleScreen>
      </HeaderContainer>
      <BodyContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <TextInput
            leftIcon="user-o"
            name="email"
            label="Digite seu e-mail"
            placeholder="E-mail"
          />
          <Button style={{ marginTop: 25 }} title="Enviar"></Button>
        </Form>
        <Button style={{ marginTop: 10 }} title="Cancelar"></Button>
      </BodyContainer>
    </Screen>
  );
};

export default ForgotPassword;

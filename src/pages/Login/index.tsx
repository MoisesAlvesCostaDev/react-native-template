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
import { Api } from "../../services/api";

interface IFormData {
  email: string;
  password: string;
}

const Login = function Login(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  async function login(loginData: IFormData): Promise<string> {
    try {
      console.log(loginData);
      const response = await Api.post("/login", loginData);
      return response.data;
    } catch (error) {
      console.log(error);
    }

    return "";
  }

  async function handleSubmit() {
    const email = formRef.current?.getData().email;
    const password = formRef.current?.getData().password;
    const loginData: IFormData = {
      email: formRef.current?.getData().email,
      password: formRef.current?.getData().password,
    };
    const tokem: string = await login(loginData);
  }

  return (
    <Screen>
      <HeaderContainer>
        <ImageHeaderContainer>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ height: 120, width: 120 }}
          />
        </ImageHeaderContainer>
        <TitleScreen>Login</TitleScreen>
      </HeaderContainer>
      <BodyContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <TextInput
            leftIcon="user-o"
            name="email"
            label="Digite seu e-mail"
            placeholder="E-mail"
          />
          <PasswordInput
            leftIcon="lock"
            canRevealPassword={true}
            name="password"
            label="Digite sua senha"
            placeholder="Digite sua senha"
            autoCapitalize="none"
            textContentType="password"
          />
          <Button
            style={{ marginTop: 25 }}
            title="Enviar"
            onPress={() => {
              handleSubmit();
            }}
          ></Button>
        </Form>
        <TouchableOpacity>
          <ForgotPasswordText>Esqueci minha senha!</ForgotPasswordText>
        </TouchableOpacity>
      </BodyContainer>
    </Screen>
  );
};

export default Login;

import React, { useRef, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Screen,
  TitleScreen,
  HeaderContainer,
  ImageHeaderContainer,
} from "assets/styles/Screen";
import { BodyContainer, ForgotPasswordText } from "./styles";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import TextInput from "components/forms/TextInput";
import PasswordInput from "components/forms/PasswordInput";
import Button from "components/Button";
import { Api } from "../../services/api";
import Modal from "components/Modal";
import { validationSchema } from "./validation";
import * as Yup from "yup";
import { useAuth } from "hooks/Auth";
import { useNavigation } from "@react-navigation/native";

interface IFormData {
  email: string;
  password: string;
}

const Login = function Login(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { signIn } = useAuth();
  const navigation = useNavigation<any>();

  async function login(loginData: IFormData): Promise<string> {
    try {
      const response = await Api.post("/login", loginData);
      return response.data;
    } catch (erro) {
      console.log("erro", erro);
    }
    setModalVisible(true);
    return "";
  }

  async function handleSubmit() {
    try {
      formRef?.current?.setErrors({});

      const loginData: IFormData = {
        email: formRef.current?.getData().email,
        password: formRef.current?.getData().password,
      };

      await validationSchema.validate(loginData, {
        abortEarly: false,
      });

      const token: string = await login(loginData);
      signIn(token);
    } catch (errors) {
      const validationErrors = {} as any;
      if (errors instanceof Yup.ValidationError) {
        errors.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        formRef?.current?.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
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
            />
          </Form>
          <TouchableOpacity>
            <ForgotPasswordText
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              Esqueci minha senha!
            </ForgotPasswordText>
          </TouchableOpacity>
        </BodyContainer>
      </Screen>
      {modalVisible && (
        <Modal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        ></Modal>
      )}
    </>
  );
};

export default Login;

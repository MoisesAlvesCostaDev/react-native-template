import React, { useRef } from "react";
import { Form } from "@unform/mobile";
import { SubmitHandler, FormHandles } from "@unform/core";
import TextInput from "components/forms/TextInput";
import Button from "components/Button";
import { forgotPasswordSteps, steps } from "misc/forgotPasswordSteps";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  name: string;
  email: string;
}

export interface IForgotPasswordProps {
  setStepCurrent: React.Dispatch<React.SetStateAction<steps>>;
}

const RequestCode: React.FC<IForgotPasswordProps> = ({ setStepCurrent }) => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation<any>();

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef.current?.getData());
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <TextInput
        leftIcon="user-o"
        name="email"
        label="Digite seu e-mail"
        placeholder="E-mail"
      />
      <Button
        style={{ marginTop: 25 }}
        title="Enviar"
        onPress={() => {
          setStepCurrent(forgotPasswordSteps[1]);
        }}
      ></Button>
      <Button
        style={{ marginTop: 10 }}
        title="Cancelar"
        onPress={() => {
          navigation.navigate("Login");
        }}
      ></Button>
    </Form>
  );
};

export default RequestCode;

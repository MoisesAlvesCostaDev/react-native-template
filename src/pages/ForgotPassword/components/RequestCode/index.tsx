import React, { useRef } from "react";
import { Form } from "@unform/mobile";
import { SubmitHandler, FormHandles } from "@unform/core";
import TextInput from "components/forms/TextInput";
import ConfirmCode from "../ConfirmCode";
import Button from "components/Button";
import { forgotPasswordSteps, steps } from "misc/forgotPasswordSteps";

interface FormData {
  name: string;
  email: string;
}

const RequestCode = function RequestCode({
  setStepCurrent,
}: {
  setStepCurrent: React.Dispatch<React.SetStateAction<steps>>;
}): JSX.Element {
  const formRef = useRef<FormHandles>(null);

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
    </Form>
  );
};

export default RequestCode;

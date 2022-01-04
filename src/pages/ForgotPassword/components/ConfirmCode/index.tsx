import React, { useRef, useState } from "react";
import { Form } from "@unform/mobile";
import { SubmitHandler, FormHandles } from "@unform/core";
import TextInput from "components/forms/TextInput";
import { forgotPasswordSteps, steps } from "misc/forgotPasswordSteps";

import Button from "components/Button";

interface FormData {
  code: string;
}

const ConfirmCode = function ConfirmCode({
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
      <TextInput name="code" label="Digite o código" placeholder="Código" />
      <Button
        style={{ marginTop: 25 }}
        title="Validar"
        onPress={() => {
          setStepCurrent(forgotPasswordSteps[2]);
        }}
      ></Button>
      <Button
        style={{ marginTop: 10 }}
        title="Voltar"
        onPress={() => {
          setStepCurrent(forgotPasswordSteps[0]);
        }}
      ></Button>
      <Button style={{ marginTop: 10 }} title="Cancelar"></Button>
    </Form>
  );
};

export default ConfirmCode;

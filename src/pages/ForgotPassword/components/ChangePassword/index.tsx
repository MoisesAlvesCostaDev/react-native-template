import React, { useRef } from "react";
import { Form } from "@unform/mobile";
import { SubmitHandler, FormHandles } from "@unform/core";
import PasswordInput from "components/forms/PasswordInput";

import Button from "components/Button";

interface FormData {
  password: string;
  confirmPassword: string;
}

const ChangePassword = function ChangePassword(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef.current?.getData());
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <PasswordInput
        leftIcon="lock"
        canRevealPassword={true}
        name="password"
        label="Digite sua senha"
        placeholder="Digite sua senha"
        autoCapitalize="none"
        textContentType="password"
      />
      <PasswordInput
        leftIcon="lock"
        canRevealPassword={true}
        name="confirmPassword"
        label="Confirme sua senha"
        placeholder="Confirme sua senha"
        autoCapitalize="none"
        textContentType="password"
      />
      <Button style={{ marginTop: 25 }} title="Alterar"></Button>
      <Button style={{ marginTop: 10 }} title="Cancelar"></Button>
    </Form>
  );
};

export default ChangePassword;

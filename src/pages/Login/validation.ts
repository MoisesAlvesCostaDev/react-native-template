import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("O E-mail é obrigatório"),
  password: Yup.string().min(4,"Senha deve conter no mínimo 4 caracteres").required("Senha é obrigatória"),
});

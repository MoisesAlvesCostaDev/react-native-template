import RequestCode from "pages/ForgotPassword/components/RequestCode";
import ConfirmCode from "pages/ForgotPassword/components/ConfirmCode";
import ChangePassword from "pages/ForgotPassword/components/ChangePassword";


export type steps = {
  id: number;
  title: string;
  component: any;
};

export const forgotPasswordSteps: steps[] = [
  { id: 0, title: "Recuperar senha solicitar código", component: RequestCode  },
  {
    id: 1,
    title: "Recuperar senha validação do código ",
    component: ConfirmCode,
  },
  {
    id: 2,
    title: "Recuperar senha criar nova senha ",
    component: ChangePassword,
  },
];

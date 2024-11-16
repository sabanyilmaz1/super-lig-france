import { loginAction } from "~/features/auth/login/action.server";
import LoginForm from "~/features/auth/login/login-form.view";

export const action = loginAction;

export default function LoginRoute() {
  return <LoginForm />;
}

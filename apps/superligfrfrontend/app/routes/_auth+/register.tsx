import { registerAction } from "~/features/auth/register/action.server";
import RegisterForm from "~/features/auth/register/regiser-form.view";

export const action = registerAction;

export default function RegisterRoute() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}

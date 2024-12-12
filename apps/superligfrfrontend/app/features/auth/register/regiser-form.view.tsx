import { Form, Link, useActionData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ErrorMessage } from "~/features/layout/error-message";

export default function RegisterForm() {
  const actionData = useActionData<{ error?: string }>();

  return (
    <div>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold text-redsuperlig">Inscription</h1>
      </div>
      <Form method="post" className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Mot de passe</Label>
          </div>
          <Input id="password" type="password" name="password" required />
        </div>
        <Button type="submit" className="w-full font-bold">
          Inscription
        </Button>

        {actionData && (
          <ErrorMessage
            title="Erreur"
            description={actionData?.error as string}
          />
        )}
      </Form>
    </div>
  );
}

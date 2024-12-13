import { Form, useActionData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ErrorMessage } from "~/features/layout/error-message";
import { SelectClub } from "./select-club";
import {
  SquareArrowOutDownRightIcon,
  SquareArrowOutUpRightIcon,
} from "lucide-react";

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
        {/* Username */}
        <div className="grid gap-2">
          <Label htmlFor="pseudo">Pseudo</Label>
          <Input
            id="pseudo"
            type="text"
            name="pseudo"
            placeholder="JohnDoe"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Mot de passe</Label>
          </div>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="********"
            required
          />
        </div>
        {/* Confirmation du mot de passe */}
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Confirmation du mot de passe</Label>
          </div>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="********"
            required
          />
        </div>
        {/* Liste déroulante */}
        <SelectClub />
        {/* Clé API Foot */}
        <div className="grid gap-2">
          <Label htmlFor="apikey">Clé API</Label>
          <div className="flex items-center gap-2">
            <Input
              id="apikey"
              type="text"
              name="apikey"
              placeholder=" xxxxxxxxxxxx"
              required
            />
            <Button variant="secondary" className="p-2">
              <SquareArrowOutUpRightIcon
                onClick={() => {
                  window.open(
                    "https://dashboard.api-football.com/register",
                    "_blank"
                  );
                }}
                className="w-6 h-6"
              />
            </Button>
          </div>
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

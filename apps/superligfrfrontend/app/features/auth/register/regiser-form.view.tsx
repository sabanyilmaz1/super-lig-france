import { Form, useActionData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import { SelectClub } from "./select-club";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { ErrorMessage } from "~/components/layout/error-message";

export default function RegisterForm() {
  const actionData = useActionData<{ error?: string; type?: string }>();

  const borderError = "border-red-500 border-2";

  return (
    <div>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold text-redsuperlig">Inscription</h1>
      </div>
      {actionData && (
        <div className="py-4">
          <ErrorMessage
            title="Erreur"
            description={actionData?.error as string}
          />
        </div>
      )}
      <Form method="post" name="register" className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            className={cn(actionData?.type?.includes("email") && borderError)}
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
            className={cn(
              actionData?.type?.includes("username") && borderError
            )}
            id="pseudo"
            type="text"
            name="pseudo"
            placeholder="JohnDoe"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="confirm_password">Mot de passe</Label>
          </div>
          <Input
            id="confirm_password"
            // className={cn(actionData?.type === "password" && "border-red-500")}
            className={cn(
              actionData?.type?.includes("password") && borderError
            )}
            type="password"
            name="password"
            placeholder="********"
            required
          />
        </div>
        {/* Confirmation du mot de passe */}
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="confirm_password">
              Confirmation du mot de passe
            </Label>
          </div>
          <Input
            id="confirm_password"
            className={cn(
              actionData?.type?.includes("password") && borderError
            )}
            type="password"
            name="confirm_password"
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
              className={cn(
                actionData?.type?.includes("api_football_key") &&
                  "border-red-500 border-2"
              )}
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
      </Form>
    </div>
  );
}

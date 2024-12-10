import { Form } from "@remix-run/react";
import { useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function LoginForm() {
  useEffect(() => {
    // Test sans passer par les actions Remix
    fetch("http://147.79.102.85:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "syilmazpro1@gmail.com",
        password: "qfknbg7u",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Response:", data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold text-redsuperlig">Connexion</h1>
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
          Connexion
        </Button>
        <Button variant="outline" className="w-full border-black">
          Connexion avec Google
        </Button>
      </Form>
      <div className="mt-4 text-center text-sm text-redsuperlig">
        Je n&apos;ai pas de compte?
        {/* <Link href="#" className="underline">Sign up</Link> */}
      </div>
    </div>
  );
}

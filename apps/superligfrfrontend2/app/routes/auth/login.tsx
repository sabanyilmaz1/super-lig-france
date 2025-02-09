import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";
import { useNavigate } from "react-router";
import { useState } from "react";
import { UserAuthService } from "~/features/user/user-auth.service";

const authService = new UserAuthService();

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { email, password } = Object.fromEntries(
        new FormData(e.target as HTMLFormElement)
      );
      await authService.login({ email, password } as {
        email: string;
        password: string;
      });
      navigate("/home");
    } catch (error) {
      console.error(error);
      setError("Identifiants incorrects. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-svh bg-muted md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Connexion</h1>
                  </div>
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
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-2 hover:underline"
                      >
                        Mot de passe oublié ?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      required
                    />
                  </div>
                  {error && (
                    <div className="p-3 text-sm text-red-500 bg-red-100 border border-red-200 rounded">
                      {error}
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
                        Connexion en cours...
                      </div>
                    ) : (
                      "Connexion"
                    )}
                  </Button>

                  <div className="text-sm text-center">
                    Vous n&apos;avez pas de compte ?{" "}
                    <a href="#" className="underline underline-offset-4">
                      Créer un compte
                    </a>
                  </div>
                </div>
              </form>

              <div className="relative hidden bg-muted md:block">
                {/* <img
                  src="/placeholder.svg"
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                /> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

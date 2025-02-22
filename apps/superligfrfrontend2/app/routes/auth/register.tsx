import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "~/components/ui/select";
import { useNavigate } from "react-router";
import { useState } from "react";
import { UserAuthService } from "~/features/user/user-auth.service";
import { Eye, EyeOff } from "lucide-react";
import { teams } from "~/lib/teams";

const authService = new UserAuthService();

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = Object.fromEntries(
        new FormData(e.target as HTMLFormElement)
      );
      await authService.register({
        email: formData.email as string,
        password: formData.password as string,
        username: formData.username as string,
        team_favorite_api_id: parseInt(formData.team_favorite_api_id as string),
      });
      navigate("/home");
    } catch (error) {
      setError(
        "Une erreur est survenue lors de l'inscription. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-redsuperlig">Inscription</h1>
        </div>

        <div className="grid gap-2">
          <Label className="text-redsuperlig" htmlFor="username">
            Nom d'utilisateur
          </Label>
          <Input
            id="username"
            name="username"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="grid gap-2">
          <Label className="text-redsuperlig" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </div>

        <div className="grid gap-2">
          <Label className="text-redsuperlig" htmlFor="password">
            Mot de passe
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <Label className="text-redsuperlig" htmlFor="favoriteClub">
          Équipe favorite
        </Label>
        <Select name="team_favorite_api_id">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sélectionnez une équipe" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {teams.map((team) => (
                <SelectItem key={team.id} value={team.id.toString()}>
                  <div className="flex items-center gap-2">
                    <img
                      src={team.image_path}
                      alt={team.name}
                      className="w-4 h-4"
                    />
                    {team.name}
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-100 border border-red-200 rounded">
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-redsuperlig hover:bg-redsuperlig/80"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
              Inscription en cours...
            </div>
          ) : (
            "S'inscrire"
          )}
        </Button>

        <div className="text-sm text-center">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="underline underline-offset-4">
            Se connecter
          </a>
        </div>
      </div>
    </form>
  );
}

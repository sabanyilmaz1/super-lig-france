import { Outlet } from "react-router";
import { Card, CardContent } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { Star, Trophy, Users } from "lucide-react";

export default function AuthLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-redsuperlig/10 ">
      <div className="w-full max-w-sm md:max-w-4xl">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              <Outlet />
              <div className="relative items-center hidden md:flex md:flex-col bg-redsuperlig">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="self-end w-14 h-14"
                />
                <div className="flex flex-col justify-center gap-2 px-4">
                  <h2 className="text-2xl font-bold text-white">
                    Bienvenue sur Super Lig France
                  </h2>
                  <p className="text-sm text-gray-100">
                    Rejoignez la plus grande communauté de football et vivez une
                    expérience unique.
                  </p>
                  <div className="mt-4 space-y-2 text-white">
                    <div className="flex items-center gap-4">
                      <Trophy className="w-5 h-5" />
                      <span className="text-sm">
                        Suivez le championnat en direct
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">
                        Noter les joueurs de votre équipe préférée
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Star className="w-5 h-5" />
                      <span className="text-sm">
                        Accédez à tous les statistiques
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="h-0.5 rounded bg-white/20 mt-4" />
                    <figure className="my-4">
                      <blockquote className="text-sm text-gray-200">
                        "Le football ne consiste pas seulement à se réjouir des
                        titres."
                      </blockquote>
                      <figcaption className="mt-1 text-xs text-gray-300">
                        — Süleyman Seba, Ancien président du Beşiktaş
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

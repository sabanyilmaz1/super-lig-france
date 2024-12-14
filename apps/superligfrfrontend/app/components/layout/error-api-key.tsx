import { Link } from "@remix-run/react";
import { AlertTriangle } from "lucide-react";
import { Button } from "../ui/button";

export const ErrorApiKey = () => {
  return (
    <main className=" mt-12 flex-grow flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white text-[#8B0000] rounded-lg shadow-lg p-8 space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="h-24 w-24 text-[#8B0000]" />
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            ❌ Connexion au service de données impossible
          </h2>
          <p className="text-lg text-gray-600">
            Pour afficher les données en temps réel sur le championnat, une clé
            valide de l’API Football est requise. Veuillez mettre à jour votre
            clé dans les paramètres de votre profil.
          </p>
        </div>
        <Link to="/profile" className="block">
          <Button
            size="lg"
            className="w-full bg-[#8B0000] hover:bg-[#5E0000] text-white"
          >
            Mettre à jour ma clé API
          </Button>
        </Link>
      </div>
    </main>
  );
};

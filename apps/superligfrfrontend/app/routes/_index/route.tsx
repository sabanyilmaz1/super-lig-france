import type { LoaderFunction, MetaFunction } from "react-router";
import { Button } from "~/components/ui/button";
import { motion } from "framer-motion";

import superLigLogo from "~/assets/logo/super-lig-log.png";
import { Link, useLoaderData } from "react-router";

import { Activity, Star, BarChart3 } from "lucide-react";
import { LogoCarousel } from "./logo-carrousel";
import { FeatureItem } from "./feature-item";
import { getSession } from "~/utils/session.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Super Lig France" },
    {
      name: "description",
      content: "Tout sur le championnat turc en français ",
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const isLoggedIn = session.has("token");
  return { isLoggedIn };
};

export const ConnexionButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <Link to={isLoggedIn ? "/home" : "/login"}>
      <Button
        variant="outline"
        className="bg-white text-black hover:bg-blue-50"
      >
        Connexion
      </Button>
    </Link>
  );
};

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#E20613] to-[#1C1C1C] overflow-hidden">
      {/* Contenu principal */}
      <div className="relative z-10 pt-24 pb-20 sm:pt-24 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <LogoCarousel />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Vivez la passion de la Super Lig
          </h1>
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-blue-100 mb-8">
            Plongez au cœur du football turc avec des analyses approfondies, des
            statistiques en direct et une communauté passionnée.
          </p>

          {/* Nouvelle section de fonctionnalités principales */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <FeatureItem Icon={Activity} title="Scores en direct" />
            <FeatureItem Icon={Star} title="Notes de joueurs" />
            <FeatureItem Icon={BarChart3} title="Analyses détaillées" />
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <ConnexionButton isLoggedIn={loaderData.isLoggedIn} />

            <Button className="bg-black text-white hover:bg-blue-600" asChild>
              <Link to="/register">Inscription</Link>
            </Button>
          </div>
          <p className="text-sm text-blue-200 mb-8">
            Faites partie de la plus grande communauté dédiée au football turc
          </p>
        </motion.div>
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col justify-center items-center gap-2 mt-4"
        >
          <div className="text-white text-opacity-50 font-semibold">
            Trendyol Süper Lig
          </div>
          <img src={superLigLogo} alt="super lig logo" className="w-20" />
        </motion.div>
      </div>
    </div>
  );
}

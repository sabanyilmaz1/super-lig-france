import { Link } from "react-router";
import { motion } from "motion/react";
import type { Route } from "./+types";
import { Caroussel } from "./_caroussel";
import { Feature } from "./_feature";
import { Button } from "~/components/ui/button";
import { Activity, Star, BarChart3 } from "lucide-react";
import { useIsAuthenticated } from "~/core/auth/check-user-session";

export default function Home() {
  const { isAuthenticated } = useIsAuthenticated();
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#E20613] to-[#1C1C1C] overflow-hidden">
      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-4 pb-20 sm:pt-24 sm:pb-24 lg:pb-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center md:hidden">
            <img src="/logo.png" alt="super lig logo" className="w-32" />
          </div>
          <div className="hidden md:block">
            <Caroussel />
          </div>
          <h1 className="mb-4 text-xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Vivez la passion de la Super Lig
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-base text-blue-100 sm:text-2xl">
            Plongez au cœur du football turc avec des analyses approfondies, des
            statistiques en direct et une communauté passionnée.
          </p>

          {/* Nouvelle section de fonctionnalités principales */}
          <div className="grid max-w-3xl grid-cols-1 gap-8 mx-auto mb-12 sm:grid-cols-3">
            <Feature Icon={Activity} title="Scores en direct" />
            <Feature Icon={Star} title="Notes de joueurs" />
            <Feature Icon={BarChart3} title="Analyses détaillées" />
          </div>

          <div className="flex justify-center mb-8 space-x-4">
            <Link to={isAuthenticated ? "/home" : "/login"}>
              <Button
                variant="outline"
                className="text-black bg-white hover:bg-blue-50"
              >
                Connexion
              </Button>
            </Link>

            <Button className="text-white bg-black hover:bg-blue-600" asChild>
              <Link to="/register">Inscription</Link>
            </Button>
          </div>
        </motion.div>
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-2 mt-4"
        ></motion.div>
      </div>
    </div>
  );
}

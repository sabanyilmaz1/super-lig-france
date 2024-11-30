import { motion, AnimatePresence } from "framer-motion";

export const FixtureHeader = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-700 text-white h-32 md:h-52 gap-3 flex flex-col justify-center md:items-center px-8 md:px-0 ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-extrabold text-3xl md:text-5xl"
      >
        Calendrier
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-medium text-sm md:text-2xl"
      >
        Suivez tous les matchs de la saison 2024-2025
      </motion.h2>
    </div>
  );
};

import React from "react";
import { motion } from "framer-motion";

export const HeaderPage = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-700 text-white h-24 md:h-40 gap-3 flex flex-col justify-center md:items-center px-8 md:px-0 ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-extrabold text-2xl md:text-4xl"
      >
        {title}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-medium text-sm md:text-xl"
      >
        {subtitle}
      </motion.h2>
    </div>
  );
};

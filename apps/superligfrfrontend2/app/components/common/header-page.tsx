import React from "react";
import { motion } from "motion/react";

export const HeaderPage = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col justify-center h-24 gap-3 px-8 text-white bg-gradient-to-r from-red-500 to-red-700 md:h-40 md:items-center md:px-0 ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-extrabold md:text-4xl"
      >
        {title}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm font-medium md:text-xl"
      >
        {subtitle}
      </motion.h2>
    </div>
  );
};

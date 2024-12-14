"use client";

import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorMessageProps {
  title: string;
  description: string;
}

export function ErrorMessage({ title, description }: ErrorMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto bg-red-600 text-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-2">
        <div className="flex items-center">
          <AlertCircle className="h-6 w-6 mr-2" />
          <h2 className="text-sm font-semibold">{title}</h2>
        </div>
        <p className="mt-2 text-xs">{description}</p>
      </div>
    </motion.div>
  );
}

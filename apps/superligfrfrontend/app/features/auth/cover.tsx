import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import wallpaper from "~/assets/wallpaperlogin.jpeg";
import wallpaper2 from "~/assets/wallpaperlogin2.jpeg";
import wallpaper3 from "~/assets/wallpaperlogin3.jpeg";
import wallpaper4 from "~/assets/wallpaperlogin4.jpeg";

const images = [wallpaper, wallpaper2, wallpaper3, wallpaper4];

export default function Cover() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <motion.img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className=" w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}

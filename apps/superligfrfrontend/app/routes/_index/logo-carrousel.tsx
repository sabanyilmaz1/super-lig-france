import { useCallback, useEffect, useState } from "react";
import { teams } from "~/data/teams";

export const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
  }, [teams.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 1000); // Défilement toutes les 1 seconde
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full overflow-hidden  py-6 mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {teams.map((team) => (
              <div
                key={team.team.id}
                className="flex-none w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/8 flex flex-col items-center justify-center px-2"
              >
                <div className="w-18 h-18 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-2">
                  <img
                    src={team.team.logo}
                    alt={team.team.name}
                    className="w-12 h-12"
                  />
                </div>
                <span className="text-white font-semibold text-center text-xs sm:text-sm">
                  {team.team.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

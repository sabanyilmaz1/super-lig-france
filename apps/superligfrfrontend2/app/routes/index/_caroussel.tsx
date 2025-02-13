import { useCallback, useEffect, useState } from "react";
import { teams } from "~/lib/teams";

export const Caroussel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
  }, [teams.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 1000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative z-20 w-full py-6 mb-8 overflow-hidden">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {teams.map((team) => (
              <div
                key={team.id}
                className="flex flex-col items-center justify-center flex-none w-1/4 px-2 sm:w-1/5 md:w-1/6 lg:w-1/8"
              >
                <div className="flex items-center justify-center mb-2 bg-white rounded-full w-18 h-18 sm:w-16 sm:h-16">
                  <img
                    src={team.image_path}
                    alt={team.name}
                    className="w-12 h-12"
                  />
                </div>
                <span className="text-xs font-semibold text-center text-white sm:text-sm">
                  {team.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

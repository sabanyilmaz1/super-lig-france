import { User } from "lucide-react";
import { cn } from "~/lib/utils";

export const Player = ({
  imagePath,
  jerseyNumber,
  commonName,
  isHome,
}: {
  imagePath: string;
  jerseyNumber: number;
  commonName: string;
  isHome: boolean;
}) => {
  return (
    <div className="flex flex-col items-center w-fit">
      <div
        className={cn(
          "relative flex items-center justify-center font-bold text-white rounded-full shadow-md w-9 h-9",
          isHome ? "bg-black" : "bg-white"
        )}
      >
        {imagePath && !imagePath.includes("placeholder") ? (
          <img
            src={imagePath}
            alt={commonName}
            className="object-cover w-full h-full rounded-full"
          />
        ) : (
          <User className="w-6 h-6 text-white" />
        )}
        <div
          className={cn(
            "absolute flex items-center justify-center w-4 h-4 text-[10px] font-bold rounded-full -bottom-1 -right-1",
            isHome ? "text-gray-800 bg-white" : "text-white bg-black"
          )}
        >
          {jerseyNumber}
        </div>
      </div>
      <div className="mt-1 text-center">
        <p className="text-[10px] font-semibold text-white">{commonName}</p>
      </div>
    </div>
  );
};

export const BenchPlayer = ({
  imagePath,
  jerseyNumber,
  commonName,
  isHome,
}: {
  imagePath: string;
  jerseyNumber: number;
  commonName: string;
  isHome: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center font-bold text-white rounded-full shadow-md w-8 h-8",
        isHome ? "bg-black" : "bg-white"
      )}
    >
      {imagePath && !imagePath.includes("placeholder") ? (
        <img
          src={imagePath}
          alt={commonName}
          className="object-cover w-full h-full rounded-full"
        />
      ) : (
        <User className="w-4 h-4 text-white" />
      )}
      <div
        className={cn(
          "absolute flex items-center justify-center w-4 h-4 text-[8px] font-bold rounded-full -bottom-1 -right-1",
          isHome ? "text-gray-800 bg-white" : "text-white bg-black"
        )}
      >
        {jerseyNumber}
      </div>
    </div>
  );
};

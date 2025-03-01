import { User } from "lucide-react";

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
        className={`relative flex items-center justify-center font-bold text-white  rounded-full shadow-md w-11 h-11 ${
          isHome ? "bg-black" : "bg-white"
        }`}
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
          className={`absolute flex items-center justify-center w-5 h-5 text-xs font-bold  rounded-full -bottom-1 -right-1 ${
            isHome ? "text-gray-800 bg-white" : "text-white bg-black"
          }`}
        >
          {jerseyNumber}
        </div>
      </div>
      <div className="mt-1 text-center">
        <p className="text-xs font-semibold text-white">{commonName}</p>
      </div>
    </div>
  );
};

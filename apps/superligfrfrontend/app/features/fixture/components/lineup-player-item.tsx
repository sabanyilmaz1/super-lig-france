import React from "react";

interface LineupPlayerItemProps {
  number: number | undefined;
  name: string | undefined;
}

export const LineupPlayerItem = ({ number, name }: LineupPlayerItemProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-lg font-bold flex justify-center items-center text-black rounded-full bg-gray-300 size-8">
        <span>{number}</span>
      </div>
      <span className="text-xs text-center truncate w-28">{name}</span>
    </div>
  );
};

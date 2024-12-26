import { InfoIcon } from "lucide-react";
import React from "react";

export const NoInformation = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center md:text-center p-2 md:p-5 bg-gray-50 rounded-lg border border-gray-200">
      <div className="text-gray-400 mb-3">
        <InfoIcon className=" md:size-12 size-6" />
      </div>
      <h3 className="text-gray-700 font-medium mb-2 text-xs md:text-base">
        {title}
      </h3>
      <p className="text-gray-500 text-xs md:text-sm">{description}</p>
    </div>
  );
};

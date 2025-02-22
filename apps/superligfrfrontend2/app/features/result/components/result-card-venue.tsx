import { MapPinHouseIcon } from "lucide-react";
import type { ResultFixture } from "../result.domain";
import { formatTimestampToTime } from "~/utils/date-formatter";

type ResultCardVenueProps = {
  result: ResultFixture;
};

export const ResultCardVenue = ({ result }: ResultCardVenueProps) => {
  return (
    <div className="flex flex-col md:gap-2">
      <div className="flex items-center gap-1 md:gap-2">
        <MapPinHouseIcon className="w-4 h-4 md:w-6 md:h-6" />
        <span className="text-xs md:text-base">{result.venue.name}</span>
      </div>
      <div className="self-center text-xs md:text-sm md:self-end text-redsuperlig ">
        {formatTimestampToTime(result.starting_at_timestamp)}
      </div>
    </div>
  );
};

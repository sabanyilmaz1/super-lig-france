import { MapPinHouseIcon } from "lucide-react";
import type { ResultFixture } from "../result.domain";
import { formatTimestampToTime } from "~/utils/date-formatter";

type ResultCardVenueProps = {
  result: ResultFixture;
};

export const ResultCardVenue = ({ result }: ResultCardVenueProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <MapPinHouseIcon />
        <span>{result.venue.name}</span>
      </div>
      <div className="self-end text-sm text-redsuperlig ">
        {formatTimestampToTime(result.starting_at_timestamp)}
      </div>
    </div>
  );
};

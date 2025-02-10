import { formatTimestampToFrenchDate } from "~/utils/date-formatter";
import type { Participant } from "../fixture.domain";

export const FixtureDisplayDate = ({
  timestamp,
}: {
  timestamp: string | number;
}) => {
  return (
    <p className="text-lg font-light text-center text-redsuperligx">
      {formatTimestampToFrenchDate(timestamp)}
    </p>
  );
};

export const FixtureDisplayParticipants = ({
  participants,
  isHome,
}: {
  participants: Participant[];
  isHome: boolean;
}) => {
  return (
    <div>
      {isHome && (
        <div className="flex items-center gap-2">
          <p className="font-extrabold uppercase text-end">
            {participants[0].name.slice(0, 3)}
          </p>
          <img
            src={participants[0].image_path}
            className="w-8 h-8"
            alt={participants[0].name}
          />
        </div>
      )}
      {!isHome && (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <img
              src={participants[1].image_path}
              className="w-8 h-8"
              alt={participants[1].name}
            />
          </div>
          <p className="font-extrabold uppercase text-start">
            {participants[1].name.slice(0, 3)}
          </p>
        </div>
      )}
    </div>
  );
};

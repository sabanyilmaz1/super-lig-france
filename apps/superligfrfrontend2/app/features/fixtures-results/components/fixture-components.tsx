import type { ParticipantWithMeta } from "~/core/domain/football-api";
import { formatTimestampToFrenchDate } from "~/utils/date-formatter";

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
  participants: ParticipantWithMeta[];
  isHome: boolean;
}) => {
  const participantAway = participants.find(
    (participant) => participant.meta.location === "away"
  );
  const participantHome = participants.find(
    (participant) => participant.meta.location === "home"
  );
  return (
    <div>
      {isHome && (
        <div className="flex items-center justify-start gap-2 md:w-20">
          <p className="font-extrabold uppercase text-end">
            {participantHome?.name.slice(0, 3)}
          </p>
          <img
            src={participantHome?.image_path}
            className="w-8 h-8"
            alt={participantHome?.name}
          />
        </div>
      )}
      {!isHome && (
        <div className="flex items-center justify-end gap-2 md:w-20">
          <div className="flex items-center gap-2">
            <img
              src={participantAway?.image_path}
              className="w-8 h-8"
              alt={participantAway?.name}
            />
          </div>
          <p className="font-extrabold uppercase text-start">
            {participantAway?.name.slice(0, 3)}
          </p>
        </div>
      )}
    </div>
  );
};

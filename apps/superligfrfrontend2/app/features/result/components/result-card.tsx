import type { ResultFixture } from "../result.domain";
import { Link } from "react-router";
import { motion } from "motion/react";
import { formatHourAndAddOne } from "~/utils/hour-formatter";
import {
  ResultItemNameLogoAway,
  ResultItemNameLogoHome,
} from "./result-card-name-club";
import { ResultCardVenue } from "./result-card-venue";

type ResultCardProps = {
  result: ResultFixture;
};

export const ResultCard = ({ result }: ResultCardProps) => {
  return (
    <Link to={`/results/${result.id}`}>
      <motion.div
        key={result.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-between p-3 transition-colors border border-gray-200 rounded-lg md:flex-row md:p-4 hover:bg-gray-50"
      >
        <div className="flex items-center gap-4">
          <ResultItemNameLogoHome result={result} />
          <div>
            <ScoreOrHour result={result} />
          </div>
          <ResultItemNameLogoAway result={result} />
        </div>
        <div className="flex flex-col items-center gap-4 mt-2 md:flex-row">
          <ResultCardVenue result={result} />
        </div>
      </motion.div>
    </Link>
  );
};

export const ScoreOrHour = ({ result }: { result: ResultFixture }) => {
  const matchNotStarted = result.scores && result.scores.length === 0;

  return (
    <div className="flex w-[70px] py-1 px-3 bg-redsuperlig justify-center font-bold text-white rounded-lg text-sm">
      {!matchNotStarted ? (
        <Score result={result} />
      ) : (
        formatHourAndAddOne(result.starting_at_timestamp)
      )}
    </div>
  );
};

const Score = ({ result }: { result: ResultFixture }) => {
  const homeScore = result.scores?.find(
    (f) => f.description === "CURRENT" && f.score.participant === "home"
  );
  const awayScore = result.scores?.find(
    (f) => f.description === "CURRENT" && f.score.participant === "away"
  );
  return (
    <div className="text-sm font-bold">
      {homeScore?.score.goals} - {awayScore?.score.goals}
    </div>
  );
};

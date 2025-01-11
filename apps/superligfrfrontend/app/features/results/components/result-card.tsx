import { Fixture } from "@monorepo/shared/types/fixture";
import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { FixtureItemLive } from "~/features/fixture/components/fixture-item-live";
import {
  FixtureItemNameLogoAway,
  FixtureItemNameLogoHome,
} from "~/features/fixture/components/fixture-item-name-logo";
import { FixtureVenue } from "~/features/fixture/components/fixture-venue";
import { ScoreOrHour } from "~/features/fixture/next-game-home/score-or-hour";
interface ResultCardProps {
  result: Fixture;
}

export const ResultCard = ({ result }: ResultCardProps) => {
  return (
    <Link to={`/results/${result.fixture.id}`}>
      <motion.div
        key={result.fixture.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-between rounded-lg border border-gray-200 p-3 md:p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <FixtureItemNameLogoHome fixture={result} />
          <div>
            <ScoreOrHour fixture={result} />
            <FixtureItemLive fixture={result} />
          </div>
          <FixtureItemNameLogoAway fixture={result} />
        </div>
        <div className="flex flex-col mt-2 md:flex-row items-center gap-4">
          <FixtureVenue fixture={result} />
        </div>
      </motion.div>
    </Link>
  );
};

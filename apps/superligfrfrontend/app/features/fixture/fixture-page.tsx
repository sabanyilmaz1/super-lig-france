import { useState } from "react";
import { ResponseApiFoot } from "@monorepo/shared/types/api-foot";
import { Fixture } from "~/model/fixture";
import { getFrenchDate, getHoursFromTimestamp } from "~/lib/utils";
import { FixtureHeader } from "./components/fixture-header";
import { FixtureDate } from "./components/fixture-date";
import { FixtureItemLive } from "./components/fixture-item-live";
import { FixtureVenue } from "./components/fixture-venue";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { ChartNoAxesColumn, Eye } from "lucide-react";
import { ScoreOrHour } from "./next-game-home/score-or-hour";
import {
  FixtureItemNameLogoAway,
  FixtureItemNameLogoHome,
} from "./components/fixture-item-name-logo";
import MatchPreview from "./match-preview/match-preview-modal";

type FixturePageProps = {
  data: {
    lastFixtureData: ResponseApiFoot<any>;
  };
};

export const FixturePage = ({ data }: FixturePageProps) => {
  if (!data) {
    return null;
  }

  const round = data.lastFixtureData.parameters.round || "1";
  const fixtures = data.lastFixtureData.response;

  // Regrouper les matchs par date
  const fixturesByDate: Record<string, Fixture[]> = fixtures.reduce(
    (acc: Record<string, Fixture[]>, fixture) => {
      const date = getFrenchDate(fixture.fixture.timestamp);
      if (!acc[date]) acc[date] = [];
      acc[date].push(fixture);
      return acc;
    },
    {} as Record<string, Fixture[]>
  );

  const sortedEntries = Object.entries(fixturesByDate).sort(
    ([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime()
  );

  const sortedFixturesByDate = sortedEntries.reduce(
    (acc, [date, fixtures]) => {
      acc[date] = fixtures;
      return acc;
    },
    {} as Record<string, Fixture[]>
  );

  const [selectedDate, setSelectedDate] = useState(
    Object.keys(sortedFixturesByDate)[0]
  );

  console.log(sortedFixturesByDate);

  return (
    <div className=" min-h-screen">
      {/* header */}
      <FixtureHeader />
      <div className=" pt-4 px-4 container md:pb-8 md:p-0 md:flex flex-col md:justify-between md:gap-4  mx-auto md:pt-12">
        {/* Date selector */}
        <FixtureDate
          sortedFixturesByDate={sortedFixturesByDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        {/* Content */}
        <div className="flex flex-col gap-4">
          {sortedFixturesByDate[selectedDate].map((fixture) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-between rounded-lg border border-gray-200 p-3 md:p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <FixtureItemNameLogoHome fixture={fixture} />
                <div>
                  <ScoreOrHour fixture={fixture} />
                  <FixtureItemLive fixture={fixture} />
                </div>
                <FixtureItemNameLogoAway fixture={fixture} />
              </div>

              <div className="flex flex-col mt-2 md:flex-row items-center gap-4">
                <FixtureVenue fixture={fixture} />
                {fixture.fixture.status.short === "NS" ? (
                  <MatchPreview fixture={fixture} />
                ) : (
                  <Button variant="ghost" size="sm" className="text-[#8B1538]">
                    <ChartNoAxesColumn className="mr-2 h-4 w-4" />
                    Voir les détails
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

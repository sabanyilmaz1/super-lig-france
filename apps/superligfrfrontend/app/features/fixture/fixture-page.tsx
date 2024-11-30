import { useState } from "react";
import { ResponseApiFoot } from "@monorepo/shared/types/api-foot";
import { Fixture } from "~/model/fixture";
import { getFrenchDate, getHoursFromTimestamp } from "~/lib/utils";
import { FixtureHeader } from "./components/fixture-header";
import { FixtureDate } from "./components/fixture-date";
import { FixtureItemLive } from "./components/fixture-item-live";

import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Eye } from "lucide-react";
import { ScoreOrHour } from "../home/next-game/score-or-hour";

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
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="font-medium w-44 flex justify-end">
                  {fixture.teams.home.name}
                </span>
                <img
                  src={fixture.teams.home.logo}
                  className=" h-12 w-12"
                  alt=""
                />
                <div>
                  <ScoreOrHour fixture={fixture} />
                  <FixtureItemLive fixture={fixture} />
                </div>
                <img
                  src={fixture.teams.away.logo}
                  className=" h-12 w-12"
                  alt=""
                />
                <span className="font-medium w-40">
                  {fixture.teams.away.name}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="block text-sm text-gray-500">
                    {fixture.fixture.venue.name}, {fixture.fixture.venue.city}
                  </span>
                  <span className="block text-sm font-medium text-[#8B1538]">
                    {getHoursFromTimestamp(fixture.fixture.timestamp)}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="text-[#8B1538]">
                  <Eye className="mr-2 h-4 w-4" />
                  Aperçu rapide
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

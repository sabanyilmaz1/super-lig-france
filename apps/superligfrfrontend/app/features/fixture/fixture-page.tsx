import { useState } from "react";
import { ResponseApiFoot } from "@monorepo/shared/types/api-foot";
import { Fixture } from "~/model/fixture";
import { FixtureHeader } from "./components/fixture-header";
import { FixtureDate } from "./components/fixture-date";
import { FixtureItemLive } from "./components/fixture-item-live";
import { FixtureVenue } from "./components/fixture-venue";
import { motion } from "framer-motion";

import { ChartNoAxesColumn } from "lucide-react";
import { ScoreOrHour } from "./next-game-home/score-or-hour";
import {
  FixtureItemNameLogoAway,
  FixtureItemNameLogoHome,
} from "./components/fixture-item-name-logo";
import MatchPreview from "./match-preview/match-preview-modal";

export const FixturePage = ({
  data,
}: {
  data: { lastFixtureData: ResponseApiFoot<any> };
}) => {
  if (!data) {
    return null;
  }

  const round = data.lastFixtureData.parameters.round || "1";
  const fixtures = data.lastFixtureData.response;

  // Regrouper les matchs par date
  const fixturesByDate: Record<string, Fixture[]> = fixtures.reduce(
    (acc, fixture) => {
      const date = new Date(fixture.fixture.timestamp * 1000)
        .toISOString()
        .split("T")[0];
      acc[date] = acc[date] || [];
      acc[date].push(fixture);
      return acc;
    },
    {} as Record<string, Fixture[]>
  );

  // Trier les dates dans l'ordre chronologique
  const sortedDates = Object.entries(fixturesByDate).sort(
    ([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime()
  );

  // Reformatage des dates pour affichage en français
  const sortedFixturesWithFormattedDates = sortedDates.map(
    ([date, fixtures]) => {
      const formattedDate = new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(date));

      const frenchFormattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

      return { date: frenchFormattedDate, fixturesForDate: fixtures };
    }
  );

  const [selectedDate, setSelectedDate] = useState(
    sortedFixturesWithFormattedDates[0]?.date || ""
  );
  return (
    <div className="min-h-screen">
      <FixtureHeader />
      <div className="pt-4 px-4 container md:pb-8 md:p-0 md:flex flex-col md:justify-between md:gap-4 mx-auto md:pt-12">
        <FixtureDate
          sortedFixturesByDate={sortedFixturesWithFormattedDates}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <div className="flex flex-col gap-4">
          {sortedFixturesWithFormattedDates
            .find(({ date }) => date === selectedDate)
            ?.fixturesForDate.map((fixture) => (
              <motion.div
                key={fixture.fixture.id}
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
                  <MatchPreview fixture={fixture} />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { useGetFixtureHome } from "../use-get-fixture-home";
import { formatTimestampToFrenchDate } from "~/utils/date-formatter";
import { Button } from "~/components/ui/button";
import { motion } from "motion/react";
import {
  ResultItemNameLogoAway,
  ResultItemNameLogoHome,
} from "~/features/result/components/result-card-name-club";
import { ScoreOrHour } from "./score-or-hour";
import { FixturePreview } from "./fixture-preview";
export const FullFixture = () => {
  const { data, isLoading } = useGetFixtureHome();
  const [selectedDay, setSelectedDay] = useState("");

  if (isLoading || !data) return <div>Loading...</div>;

  const dates = data.groupedFixtures.map((fixture) =>
    formatTimestampToFrenchDate(fixture[0].starting_at_timestamp)
  );

  if (selectedDay === "" && dates.length > 0) {
    setSelectedDay(dates[0]);
  }

  console.log(data.groupedFixtures);

  return (
    <div>
      {/* Choix du jour */}
      <SelectDate
        dates={dates}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      {/* Contenu */}
      <div className="flex flex-col gap-4">
        {data.groupedFixtures
          .find((fixture) =>
            fixture.some(
              (f) =>
                formatTimestampToFrenchDate(f.starting_at_timestamp) ===
                selectedDay
            )
          )
          ?.map((fixture) => (
            <motion.div
              key={fixture.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-between p-3 transition-colors border border-gray-200 rounded-lg md:flex-row md:p-4 hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <ResultItemNameLogoHome result={fixture} />
                <ScoreOrHour fixture={fixture} />
                <ResultItemNameLogoAway result={fixture} />
              </div>
              <div className="flex flex-col items-center gap-4 mt-2 md:flex-row">
                <FixturePreview />
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

const SelectDate = ({
  dates,
  selectedDay,
  setSelectedDay,
}: {
  dates: string[];
  selectedDay: string;
  setSelectedDay: (date: string) => void;
}) => {
  return (
    <div className="flex gap-2 p-4 overflow-x-auto">
      {dates.map((date) => (
        <Button
          key={date}
          variant={selectedDay === date ? "default" : "outline"}
          className={`flex-shrink-0 h-16 ${
            selectedDay === date ? "bg-redsuperlig text-white" : ""
          }`}
          onClick={() => setSelectedDay(date)}
        >
          <div>
            <div className="text-left">{date.split(" ")[0]}</div>
            <div className="text-left">
              {date.split(" ").slice(1).join(" ")}
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
};

import { Button } from "~/components/ui/button";
import { Fixture } from "~/model/fixture";

type FixtureDateProps = {
  sortedFixturesByDate: {
    date: string;
    fixturesForDate: Fixture[];
  }[];
  selectedDate: string;
  setSelectedDate: (date: string) => void;
};

export const FixtureDate = ({
  sortedFixturesByDate,
  selectedDate,
  setSelectedDate,
}: FixtureDateProps) => {
  console.log(sortedFixturesByDate);

  return (
    <div className=" flex gap-4 overflow-x-auto pb-4">
      {sortedFixturesByDate.map((item) => {
        const dateSplited = item.date.split(" ");
        return (
          <Button
            key={item.date}
            variant={selectedDate === item.date ? "default" : "outline"}
            className={`flex-shrink-0 h-16 ${
              selectedDate === item.date ? "bg-redsuperlig text-white" : ""
            }`}
            onClick={() => setSelectedDate(item.date)}
          >
            {" "}
            <div className="text-left">
              <div className=" text-lg font-semibold">{dateSplited[0]}</div>
              <div className="">{`${dateSplited[1]} ${dateSplited[2]}`}</div>
            </div>
          </Button>
        );
      })}
    </div>
  );
};

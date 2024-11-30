import { Button } from "~/components/ui/button";

type FixtureDateProps = {
  sortedFixturesByDate: Record<string, any>;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
};

export const FixtureDate = ({
  sortedFixturesByDate,
  selectedDate,
  setSelectedDate,
}: FixtureDateProps) => {
  return (
    <div className=" flex gap-4 overflow-x-auto pb-4">
      {Object.keys(sortedFixturesByDate).map((date) => {
        const dateSplited = date.split(" ");
        return (
          <Button
            key={date}
            variant={selectedDate === date ? "default" : "outline"}
            className={`flex-shrink-0 h-16 ${
              selectedDate === date ? "bg-redsuperlig text-white" : ""
            }`}
            onClick={() => setSelectedDate(date)}
          >
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

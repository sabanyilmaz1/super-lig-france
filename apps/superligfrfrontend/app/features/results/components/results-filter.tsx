import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

interface ResultsFilterProps {
  selectedMatchday: string;
  setSelectedMatchday: (matchday: string) => void;
}

export const ResultsFilter = ({
  selectedMatchday,
  setSelectedMatchday,
}: ResultsFilterProps) => {
  const matchDaysBefore = Array.from(
    { length: parseInt(selectedMatchday) },
    (_, i) => i + 1
  );

  return (
    <div>
      <Select
        value={String(selectedMatchday)}
        onValueChange={setSelectedMatchday}
      >
        <SelectTrigger className="md:w-[300px]">
          <SelectValue placeholder="Sélectionner une journée" />
        </SelectTrigger>
        <SelectContent>
          {matchDaysBefore.map((day) => (
            <SelectItem key={day} value={day.toString()}>
              {`Journée ${day}`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

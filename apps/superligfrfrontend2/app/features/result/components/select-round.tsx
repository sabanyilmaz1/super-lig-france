import { type UseMutationResult } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import type { Fixture } from "~/features/fixtures-results/fixture.domain";

type SelectRoundProps = {
  currentRound: string;
  updateFixtures: UseMutationResult<
    { fixtures: Fixture[]; round: string },
    Error,
    string
  >;
  lastRound: string;
};

export const SelectRound = ({
  currentRound,
  updateFixtures,
  lastRound,
}: SelectRoundProps) => {
  const rounds = Array.from({ length: parseInt(lastRound) }, (_, i) => i + 1);

  const handleChange = async (value: string) => {
    try {
      await updateFixtures.mutateAsync(value);
    } catch (error) {
      console.error("Erreur lors de la mise à jour des résultats:", error);
    }
  };

  return (
    <Select value={currentRound} onValueChange={handleChange}>
      <SelectTrigger className="md:max-w-xs max-w-[200px]">
        <SelectValue placeholder="Sélectionner une journée" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {rounds.map((round) => (
            <SelectItem key={round} value={round.toString()}>
              Journée {round}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { Tabs } from "~/components/ui/tabs";

import { Eye } from "lucide-react";
import { Fixture } from "~/model/fixture";
import { MatchPreviewHeader } from "./match-preview-header";
import { MatchPreviewTablist } from "./match-preview-tablist";
import { MatchPreviewLineup } from "./match-preview-lineup";
import { MatchPreviewHistory } from "./match-preview-history";
import { useMatchPreview } from "./use-match-preview";
import { MatchPreviewStats } from "./match-preview-stats";

import { ApiResponse } from "@monorepo/shared/types/api";
import { MatchPreview } from "@monorepo/shared/types/fixture";
import { MatchPreviewInjuries } from "./match-preview-injuries";

interface TeamStats {
  possession: number;
  shots: number;
  shotsOnTarget: number;
  corners: number;
  fouls: number;
}

interface MatchPreviewProps {
  homeTeam: {
    name: string;
    logo: string;
    stats: TeamStats;
    lineup: string[];
  };
  awayTeam: {
    name: string;
    logo: string;
    stats: TeamStats;
    lineup: string[];
  };
}

const matchData: MatchPreviewProps = {
  homeTeam: {
    name: "Galatasaray",
    logo: "/placeholder.svg?height=32&width=32",
    stats: {
      possession: 55,
      shots: 12,
      shotsOnTarget: 5,
      corners: 6,
      fouls: 10,
    },
    lineup: [
      "Muslera",
      "Boey",
      "Sanchez",
      "Bardakci",
      "Angelino",
      "Torreira",
      "Demirbay",
      "Ziyech",
      "Mertens",
      "Zaha",
      "Icardi",
    ],
  },
  awayTeam: {
    name: "Fenerbahçe",
    logo: "/placeholder.svg?height=32&width=32",
    stats: {
      possession: 45,
      shots: 8,
      shotsOnTarget: 3,
      corners: 4,
      fouls: 12,
    },
    lineup: [
      "Livakovic",
      "Osayi-Samuel",
      "Djiku",
      "Oosterwolde",
      "Ferdi",
      "İsmail",
      "Fred",
      "Szymanski",
      "Tadic",
      "Kahveci",
      "Dzeko",
    ],
  },
};

export default function MatchPreview({ fixture }: { fixture: Fixture }) {
  const { homeTeam, awayTeam } = matchData;
  const fixtureId = fixture.fixture.id;
  const homeTeamId = fixture.teams.home.id;
  const awayTeamId = fixture.teams.away.id;

  const { isLoading, data, fetchPreview } = useMatchPreview();

  const matchPreviewData = data as ApiResponse<MatchPreview>;
  const { headToHead, injuries, predictions, lineups } =
    matchPreviewData?.data || {};

  if (lineups) {
    console.log("lineups", lineups);
  }

  if (predictions) {
    console.log("predictions", predictions);
  }

  if (headToHead) {
    console.log("headToHead", headToHead);
  }

  if (injuries) {
    console.log("injuries", injuries);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={() => fetchPreview(fixtureId, homeTeamId, awayTeamId)}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Eye className="h-4 w-4" />
          Aperçu rapide
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-4xl min-h-[600px] md:min-h-[600px] flex flex-col">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <MatchPreviewHeader fixture={fixture} />
            <Tabs defaultValue="stats" className=" md:w-full">
              <MatchPreviewTablist />
              <MatchPreviewInjuries injuries={injuries} />
              <MatchPreviewLineup lineups={lineups} />
              <MatchPreviewHistory headToHead={headToHead} />
              <MatchPreviewStats predictions={predictions} />
            </Tabs>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

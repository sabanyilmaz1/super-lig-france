import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Eye } from "lucide-react";
import { Fixture } from "~/model/fixture";

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
  lastMatches: Array<{
    date: string;
    homeTeam: string;
    awayTeam: string;
    score: string;
  }>;
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
  lastMatches: [
    {
      date: "2023-05-15",
      homeTeam: "Galatasaray",
      awayTeam: "Fenerbahçe",
      score: "2-1",
    },
    {
      date: "2022-12-18",
      homeTeam: "Fenerbahçe",
      awayTeam: "Galatasaray",
      score: "0-0",
    },
    {
      date: "2022-04-10",
      homeTeam: "Galatasaray",
      awayTeam: "Fenerbahçe",
      score: "2-3",
    },
    {
      date: "2021-11-21",
      homeTeam: "Fenerbahçe",
      awayTeam: "Galatasaray",
      score: "1-2",
    },
    {
      date: "2021-02-06",
      homeTeam: "Fenerbahçe",
      awayTeam: "Galatasaray",
      score: "0-1",
    },
  ],
};

export default function MatchPreview({ fixture }: { fixture: Fixture }) {
  const { homeTeam, awayTeam, lastMatches } = matchData;

  const fixtureId = fixture.fixture.id;
  const homeTeamId = fixture.teams.home.id;
  const awayTeamId = fixture.teams.away.id;

  console.log("Match ID: ", fixtureId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Eye className="h-4 w-4" />
          Aperçu rapide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-4 text-xl">
            <div className="flex items-center gap-2">
              <img
                src={homeTeam.logo}
                alt={homeTeam.name}
                className="h-8 w-8"
              />
              <span>{homeTeam.name}</span>
            </div>
            <span>vs</span>
            <div className="flex items-center gap-2">
              <img
                src={awayTeam.logo}
                alt={awayTeam.name}
                className="h-8 w-8"
              />
              <span>{awayTeam.name}</span>
            </div>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="lineup" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="lineup">Composition</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
            <TabsTrigger value="stats">Statistiques</TabsTrigger>
          </TabsList>

          <TabsContent value="lineup">
            <div className="grid grid-cols-2 gap-4 p-4">
              <div>
                <h3 className="mb-2 font-semibold">{homeTeam.name}</h3>
                <ul className="space-y-1">
                  {homeTeam.lineup.map((player, index) => (
                    <li key={index} className="text-sm">
                      {player}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">{awayTeam.name}</h3>
                <ul className="space-y-1">
                  {awayTeam.lineup.map((player, index) => (
                    <li key={index} className="text-sm">
                      {player}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <ScrollArea className="h-[300px] w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Match</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lastMatches.map((match, index) => (
                    <TableRow key={index}>
                      <TableCell>{match.date}</TableCell>
                      <TableCell>
                        {match.homeTeam} - {match.awayTeam}
                      </TableCell>
                      <TableCell className="text-right">
                        {match.score}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="stats">
            <div className="space-y-4 p-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-right">{homeTeam.stats.possession}%</div>
                <div className="text-center text-sm text-muted-foreground">
                  Possession
                </div>
                <div>{awayTeam.stats.possession}%</div>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-right">{homeTeam.stats.shots}</div>
                <div className="text-center text-sm text-muted-foreground">
                  Tirs
                </div>
                <div>{awayTeam.stats.shots}</div>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-right">{homeTeam.stats.shotsOnTarget}</div>
                <div className="text-center text-sm text-muted-foreground">
                  Tirs cadrés
                </div>
                <div>{awayTeam.stats.shotsOnTarget}</div>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-right">{homeTeam.stats.corners}</div>
                <div className="text-center text-sm text-muted-foreground">
                  Corners
                </div>
                <div>{awayTeam.stats.corners}</div>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="text-right">{homeTeam.stats.fouls}</div>
                <div className="text-center text-sm text-muted-foreground">
                  Fautes
                </div>
                <div>{awayTeam.stats.fouls}</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

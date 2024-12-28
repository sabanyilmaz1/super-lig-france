import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { truncateText } from "~/lib/utils";
import { Standing } from "~/model/standing";
import logo from "~/assets/logo/logo.png";

interface TableHomeViewProps {
  table: Standing;
}

export const TableHomeView = ({ table }: TableHomeViewProps) => {
  const standing = table.response[0].league.standings[0];

  return (
    <Card className="min-h-96 border-2 border-redsuperlig shadow-lg">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-700 rounded-t-md text-white flex items-center justify-center text-center">
        <CardTitle className="flex justify-between items-center gap-2 w-full ">
          <img
            src={logo}
            className=" size-10 md:size-12"
            alt="logo super ligue france"
          />
          <p>Süper Lig</p>
          <div></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table className="w-full">
          <TableHeader className=" text-[10px]">
            <TableRow>
              <TableHead className="w-11">Pos</TableHead>
              <TableHead className="w-[186px]">Club</TableHead>
              <TableHead className=" w-5">J</TableHead>
              <TableHead className=" w-10">Diff</TableHead>
              <TableHead className=" w-10">Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {standing.map((team) => (
              <TableRow key={team.team.id}>
                <TableCell className="w-11">{team.rank}</TableCell>
                <TableCell className="w-[186px] flex items-center gap-2">
                  <img
                    src={team.team.logo}
                    alt={team.team.name}
                    className="w-5 h-5"
                  />
                  <p className=" font-bold text-redsuperlig">
                    {truncateText(team.team.name, 14)}
                  </p>
                </TableCell>
                <TableCell className="w-5">{team.all.played}</TableCell>
                <TableCell className="w-10">{team.goalsDiff}</TableCell>
                <TableCell className="w-10">{team.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

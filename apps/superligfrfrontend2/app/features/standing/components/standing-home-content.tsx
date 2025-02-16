import React from "react";
import { Card, CardContent } from "~/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "~/components/ui/table";

import { TypeDeveloperName } from "../domain/standing.domain";
import { HomeCardHeader } from "~/components/common/home-card-header";
import { useGetStanding } from "../hooks/use-get-standing";

const tabConfig = [
  {
    header: "Pos",
    className: "w-11",
    key: "position",
    accessor: (team: any) => team.position,
  },
  {
    header: "Club",
    className: "w-[186px]",
    key: "club",
    accessor: (team: any) => ({
      name: team.participant.name.slice(0, 14),
      image: team.participant.image_path,
    }),
  },
  {
    header: "J",
    className: "w-5",
    key: "matches",
    accessor: (team: any) =>
      team.details.find(
        (detail: any) =>
          detail.type.developer_name === TypeDeveloperName.OVERALL_MATCHES
      )?.value,
  },
  {
    header: "Diff",
    className: "w-10",
    key: "diff",
    accessor: (team: any) =>
      team.details.find(
        (detail: any) =>
          detail.type.developer_name ===
          TypeDeveloperName.OVERALL_GOAL_DIFFERENCE
      )?.value,
  },
  {
    header: "Pts",
    className: "w-10",
    key: "points",
    accessor: (team: any) => team.points,
  },
];

export const StandingHomeContent = () => {
  const { data: standing, isLoading } = useGetStanding();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Card className="border-2 shadow-lg min-h-96 border-redsuperlig">
      <HomeCardHeader title="Classement" />
      <CardContent className="p-0">
        <Table className="w-full">
          <TableHeader className=" text-[10px]">
            <TableRow>
              {tabConfig.map((column) => (
                <TableHead key={column.key} className={column.className}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {standing &&
              standing.map((team) => (
                <TableRow className="px-4 py-3" key={team.participant.id}>
                  {tabConfig.map((column) => (
                    <TableCell key={column.key} className={column.className}>
                      {column.key === "club" ? (
                        <div className="flex items-center gap-2">
                          <img
                            src={column.accessor(team).image}
                            alt={column.accessor(team).name}
                            className="w-5 h-5"
                          />
                          <p className="font-bold text-redsuperlig">
                            {column.accessor(team).name}
                          </p>
                        </div>
                      ) : (
                        column.accessor(team)
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

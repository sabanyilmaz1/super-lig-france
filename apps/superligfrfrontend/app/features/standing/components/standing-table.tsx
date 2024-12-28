import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { StandingEntry } from "~/model/standing";

interface StandingTableProps {
  standing: StandingEntry[];
}

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

export const StandingTable = ({ standing }: StandingTableProps) => {
  return (
    <div>
      <Table className="max-w-7xl">
        <TableHeader className=" text-sm">
          <TableRow>
            {table.map((item, index) => (
              <TableHead key={index} className={`${item.width}`}>
                <span className="hidden md:block">{item.name}</span>
                {item.nameMobile && (
                  <span className="md:hidden">{item.nameMobile}</span>
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {standing.map((item) => (
            <TableRow key={item.team.id}>
              {table.map((column) => {
                if (column.key === "form") {
                  return (
                    <TableCellForm
                      key={column.key}
                      form={item.form}
                      className={`${column.width} `}
                    />
                  );
                }
                return (
                  <TableCell key={column.key} className={`${column.width}  `}>
                    <div
                      className={`${column.key === "team.name" ? "flex items-center gap-2" : ""}`}
                    >
                      {column.key === "team.name" && item.team?.logo && (
                        <img
                          src={item.team.logo}
                          alt={item.team.name}
                          className="w-8 h-8 inline-block mr-2"
                        />
                      )}
                      {column.key === "team.name" ? (
                        <>
                          <span className="md:text-sm hidden md:block">
                            {getNestedValue(item, column.key)}
                          </span>
                          <span className="text-xs md:hidden uppercase">
                            {getNestedValue(item, column.key).slice(0, 3)}
                          </span>
                        </>
                      ) : (
                        <span className="text-xs md:text-sm">
                          {getNestedValue(item, column.key)}
                        </span>
                      )}
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const TableCellForm = ({
  form,
  className,
}: {
  form: string;
  className: string;
}) => {
  return (
    <TableCell className={`w-20 px-0 text-center ${className}`}>
      <div className="flex justify-center gap-1">
        {form.split("").map((item, index) => (
          <span
            key={index}
            className={`${
              item === "W"
                ? "bg-green-500"
                : item === "D"
                  ? "bg-yellow-500"
                  : "bg-red-500"
            } w-6 h-6 rounded-full flex items-center justify-center text-white font-bold`}
          >
            {item === "W" ? "V" : item === "D" ? "N" : "D"}
          </span>
        ))}
      </div>
    </TableCell>
  );
};

const table = [
  {
    name: "Pos",
    nameMobile: "",
    width: "w-3 px-0 md:w-11 font-bold text-center",
    key: "rank",
  },
  {
    name: "Club",
    nameMobile: "Club",
    width: "w-24 font-bold",
    key: "team.name",
  },
  {
    name: "Joué",
    nameMobile: "J",
    width: "w-10 px-0 text-center",
    key: "all.played",
  },
  {
    name: "Victoire",
    nameMobile: "V",
    width: "w-10 px-0 text-center",
    key: "all.win",
  },
  {
    name: "Nul",
    nameMobile: "N",
    width: "w-10 px-0 text-center",
    key: "all.draw",
  },
  {
    name: "Défaite",
    nameMobile: "D",
    width: "w-10 px-0 text-center",
    key: "all.lose",
  },
  {
    name: "Buts +",
    width: "w-10 px-0 text-center hidden md:table-cell",
    key: "all.goals.for",
  },
  {
    name: "Buts -",
    width: "w-10 px-0 text-center hidden md:table-cell",
    key: "all.goals.against",
  },
  {
    name: "Diff",
    nameMobile: "Diff",
    width: "w-10 px-0 text-center",
    key: "goalsDiff",
  },
  {
    name: "Points",
    nameMobile: "Pts",
    width: "w-10 px-0 text-center font-extrabold",
    key: "points",
  },
  {
    name: "Forme",
    width: "w-10 px-0 text-center hidden md:table-cell",
    key: "form",
  },
];

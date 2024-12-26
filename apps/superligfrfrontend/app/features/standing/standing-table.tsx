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

export const StandingTable = () => {
  return (
    <div>
      <Table className="max-w-7xl">
        <TableHeader className=" text-[10px]">
          <TableRow>
            <TableHead className="w-11">Pos</TableHead>
            <TableHead className="w-[186px]">Club</TableHead>
            <TableHead className=" w-5">PI</TableHead>
            <TableHead className=" w-10">GD</TableHead>
            <TableHead className=" w-10">Pts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </Table>
    </div>
  );
};

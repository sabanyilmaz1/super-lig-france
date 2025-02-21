import React from "react";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export const FullStandingSkeleton = () => {
  return (
    <Table className="max-w-7xl">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Skeleton className="w-5 h-4"></Skeleton>
          </TableHead>
          <TableHead>
            <Skeleton className="w-56 h-4"></Skeleton>
          </TableHead>
          {Array.from({ length: 8 }).map((_, index) => (
            <TableHead key={index}>
              <Skeleton className="w-10 h-4"></Skeleton>
            </TableHead>
          ))}
          <TableHead>
            <Skeleton className="w-24 h-4"></Skeleton>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 19 }).map((_, index) => (
          <TableRow>
            <TableCell>
              <Skeleton className="w-5 h-4"></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton className="w-56 h-4"></Skeleton>
            </TableCell>
            {Array.from({ length: 8 }).map((_, index) => (
              <TableCell key={index}>
                <Skeleton className="w-10 h-4"></Skeleton>
              </TableCell>
            ))}
            <TableCell>
              <Skeleton className="w-24 h-4"></Skeleton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

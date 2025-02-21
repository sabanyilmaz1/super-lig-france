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

import { HomeCardHeaderSkeleton } from "~/components/common/home-card-header";
import { Card, CardContent } from "~/components/ui/card";

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

export const StandingHomeSkeleton = () => {
  return (
    <Card className="border-2 border-gray-300 shadow-lg min-h-96">
      <HomeCardHeaderSkeleton />
      <CardContent className="p-0">
        <Table className="w-full">
          <TableHeader className=" text-[10px]">
            <TableRow>
              {Array.from({ length: 4 }).map((_, index) => (
                <TableHead key={index}>
                  <Skeleton className="w-10 h-4" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 19 }).map((_, index) => (
              <TableRow key={index}>
                {Array.from({ length: 4 }).map((_, index) => (
                  <TableCell key={index}>
                    <Skeleton className="w-10 h-4" />
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

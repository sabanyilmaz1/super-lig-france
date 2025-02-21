import React from "react";
import { HomeCardHeaderSkeleton } from "~/components/common/home-card-header";
import { Card, CardContent } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export const StandingHomeStatsSkeleton = () => {
  return (
    <Card className="border-2 border-gray-300 shadow-lg min-h-96">
      <HomeCardHeaderSkeleton />
      <CardContent className="p-6">
        <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="w-[40%] h-7"></Skeleton>
              <Card className="mt-4 bg-gray-200 h-[170px] w-full "></Card>
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="w-full h-20"></Skeleton>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

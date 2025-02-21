import React from "react";
import { HomeCardHeaderSkeleton } from "~/components/common/home-card-header";
import { Card, CardContent } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export const FixtureHomeSkeleton = () => {
  return (
    <Card className="border-2 border-gray-300 shadow-lg min-h-96">
      <HomeCardHeaderSkeleton />
      <CardContent className="p-0 mt-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="mt-4">
            <Skeleton className="w-[70%] mx-auto h-7"></Skeleton>
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 p-3 border-b"
              >
                <Skeleton className="w-24 h-4" />
                <Skeleton className="w-10 h-10 rounded-full md:w-12 md:h-12" />
                <Skeleton className="w-24 h-4" />
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

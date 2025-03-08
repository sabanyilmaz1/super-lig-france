import React from "react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export const BlogHomeSkeleton = () => {
  return (
    <Card className="border-2 border-gray-300 bg-gray-200 shadow-lg min-h-[400px]">
      <CardHeader></CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3  lg:grid-cols-[70%_30%]">
          <Card className="overflow-hidden shadow-none  bg-transparent !border-none ">
            <CardContent className="space-y-4 !p-0">
              <Skeleton className="h-48 md:h-[440px] w-[95%]  rounded-lg "></Skeleton>

              <div className="space-y-4 md:px-6">
                <Skeleton className="w-[70%] h-12 md:h-6"></Skeleton>
                <Skeleton className="w-[30%] h-4"></Skeleton>
                <Skeleton className="w-full h-20"></Skeleton>
                <Skeleton className="w-[20%] h-4"></Skeleton>
              </div>
            </CardContent>
          </Card>

          {/* Articles Récents */}
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <Skeleton
                    key={index}
                    className="w-full h-20 md:h-40"
                  ></Skeleton>
                  <Skeleton className="w-[70%] h-7 md:h-6"></Skeleton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

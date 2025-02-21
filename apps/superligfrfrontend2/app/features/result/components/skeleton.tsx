import { Skeleton } from "~/components/ui/skeleton";

export const FullResultSkeleton = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <Skeleton className=" w-28 md:w-44 h-7 md:h-9" />
        <Skeleton className="w-48 h-10 md:w-80" />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-4 mt-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-24 md:h-28" />
        ))}
        {/* {roundData?.fixtures.map((fixture) => (
      <ResultCard key={fixture.id} result={fixture} />
    ))} */}
      </div>
    </div>
  );
};

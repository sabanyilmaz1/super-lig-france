import { CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const HomeCardHeader = ({ title }: { title: string }) => {
  return (
    <CardHeader className="flex items-center justify-center px-0 py-2 text-center text-white bg-gradient-to-r from-red-500 to-red-700 rounded-t-md">
      <CardTitle className="flex items-center justify-between w-full gap-2 ">
        <img
          src="/logo.png"
          className=" size-10 md:size-12"
          alt="logo super ligue france"
        />
        <p>{title}</p>
        <div></div>
      </CardTitle>
    </CardHeader>
  );
};

export const HomeCardHeaderSkeleton = () => {
  return (
    <div className="flex items-center justify-center px-0 py-2 text-center bg-gray-200 rounded-t-md">
      <div className="flex items-center justify-between w-full gap-2 ml-4 ">
        <Skeleton className="w-10 h-10 rounded-full md:w-12 md:h-12" />
        <Skeleton className="w-24 h-4" />
        <div></div>
      </div>
    </div>
  );
};

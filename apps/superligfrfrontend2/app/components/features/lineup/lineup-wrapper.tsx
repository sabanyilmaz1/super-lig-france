export default function LineupWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mx-auto md:m-0 md:max-w-sm">
      <div className="overflow-hidden rounded-lg shadow-xl bg-gradient-to-b from-green-600 to-green-800">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex flex-col">
            <div className="absolute w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full top-1/2 left-1/2 border-opacity-30"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white bg-opacity-30"></div>
            <div className="absolute top-0 w-64 h-24 transform -translate-x-1/2 border-b-2 border-l-2 border-r-2 border-white left-1/2 border-opacity-30"></div>
            <div className="absolute bottom-0 w-64 h-24 transform -translate-x-1/2 border-t-2 border-l-2 border-r-2 border-white left-1/2 border-opacity-30"></div>
          </div>
          <div className="py-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

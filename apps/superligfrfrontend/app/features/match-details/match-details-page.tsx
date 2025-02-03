export const MatchDetailsPage = () => {
  return (
    <div className="container mx-auto mt-12 shadow-xl rounded-2xl">
      {/* Content Score */}
      <div className=" max-w-5xl mx-auto p-4 flex flex-col items-center">
        {/* Informations */}
        <div className="text-xs flex w-fit gap-3 border-t border-l border-r border-gray-400 px-2 py-1 rounded-t-lg">
          <span>Sat 4 Jan 2025</span>
          <span>Kick Off: 16:00</span>
          <span>Villa Park, Birmingham</span>
          <span>Ref: Jane Doe</span>
        </div>
        {/* ScoreBoard */}
        <div className="w-full flex">
          <div className="flex-1 flex items-center h-16 bg-red-100 relative">
            <div className="absolute -top-2 -left-4 flex items-center gap-4">
              <img
                className="h-20 "
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/37/Logo_de_Fenerbah%C3%A7e_%281929%29.svg/1200px-Logo_de_Fenerbah%C3%A7e_%281929%29.svg.png"
                alt=""
              />
              <span className="text-2xl font-bold">Fenerbahçe</span>
            </div>
          </div>
          <div className="flex-2 flex flex-col justify-center items-center h-20 w-[150px] rounded-b-2xl bg-redsuperlig text-white border-l-4 border-r-4 border-white">
            <div className="font-extrabold text-4xl flex gap-2">
              <span>2</span>
              <span>-</span>
              <span>1</span>
            </div>
            <div className="text-xs mt-1">Mi-Temps: 0-0</div>
          </div>
          <div className="flex-1 h-16 bg-red-100 relative">
            <img
              className="h-20 absolute -top-2 -right-4"
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/37/Logo_de_Fenerbah%C3%A7e_%281929%29.svg/1200px-Logo_de_Fenerbah%C3%A7e_%281929%29.svg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

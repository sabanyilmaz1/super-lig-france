import { ExternalLinkIcon } from "lucide-react";
import { teams } from "~/data/teams";

export const ClubsBanner = () => {
  return (
    <div className="max-w-7xl py-3 mx-auto hidden lg:block">
      <div className="flex items-center gap-6">
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <span>Club Sites</span>
          <ExternalLinkIcon className="h-4 w-4 inline-block" />
        </div>

        {teams.map((team) => (
          <button key={team.team.id}>
            <img
              src={team.team.logo}
              alt={team.team.name}
              className="h-8 w-8 hover:scale-125 ease-in-out transition-transform"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

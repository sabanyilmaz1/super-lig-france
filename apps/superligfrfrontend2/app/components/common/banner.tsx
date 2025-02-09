import { ExternalLinkIcon } from "lucide-react";
import { teams } from "~/lib/teams";

export const Banner = () => {
  return (
    <div className="hidden py-3 mx-auto max-w-7xl lg:block">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Club Sites</span>
          <ExternalLinkIcon className="inline-block w-4 h-4" />
        </div>
        {teams.map((team) => (
          <button key={team.team.id}>
            <img
              src={team.team.logo}
              alt={team.team.name}
              className="w-8 h-8 transition-transform ease-in-out hover:scale-125"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

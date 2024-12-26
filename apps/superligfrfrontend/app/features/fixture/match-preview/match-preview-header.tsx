import React from "react";
import { DialogHeader, DialogTitle } from "~/components/ui/dialog";
import { Fixture } from "~/model/fixture";

export const MatchPreviewHeader = ({ fixture }: { fixture: Fixture }) => {
  return (
    <DialogHeader>
      <DialogTitle className="flex items-center justify-center gap-4 text-sm md:text-xl">
        <div className="flex items-center gap-2">
          <img
            src={fixture.teams.home.logo}
            alt={fixture.teams.home.name}
            className="h-8 w-8"
          />
          <span>{fixture.teams.home.name}</span>
        </div>
        <span>vs</span>
        <div className="flex items-center gap-2">
          <img
            src={fixture.teams.away.logo}
            alt={fixture.teams.away.name}
            className="h-8 w-8"
          />
          <span>{fixture.teams.away.name}</span>
        </div>
      </DialogTitle>
    </DialogHeader>
  );
};

import React from "react";
import { Fixture } from "../../../model/fixture";
import { getHoursFromTimestamp } from "../../../lib/utils";

export const FixtureVenue = ({ fixture }: { fixture: Fixture }) => {
  return (
    <div className="md:text-right text-center">
      <span className="block text-sm text-gray-500">
        {fixture.fixture.venue.name}, {fixture.fixture.venue.city}
      </span>
      <span className="block text-sm font-medium text-[#8B1538]">
        {getHoursFromTimestamp(fixture.fixture.timestamp)}
      </span>
    </div>
  );
};

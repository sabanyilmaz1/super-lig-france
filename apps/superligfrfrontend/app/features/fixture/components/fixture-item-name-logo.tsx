import React from "react";
import { Fixture } from "~/model/fixture";

export const FixtureItemNameLogoHome = ({ fixture }: { fixture: Fixture }) => {
  return (
    <>
      <span className=" hidden md:flex font-medium w-44 justify-end">
        {fixture.teams.home.name}
      </span>
      <img
        src={fixture.teams.home.logo}
        className=" h-12 w-12"
        alt={`${fixture.teams.home.name} logo`}
      />
    </>
  );
};

export const FixtureItemNameLogoAway = ({ fixture }: { fixture: Fixture }) => {
  return (
    <>
      <img
        src={fixture.teams.away.logo}
        className=" h-12 w-12"
        alt={`${fixture.teams.away.name} logo`}
      />
      <span className="font-medium w-40 hidden md:flex ">
        {fixture.teams.away.name}
      </span>
    </>
  );
};

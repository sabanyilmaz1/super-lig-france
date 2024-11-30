import React from "react";
import { Fixture } from "~/model/fixture";

export const FixtureItemLive = ({ fixture }: { fixture: Fixture }) => {
  return (
    <div>
      {" "}
      {(fixture.fixture.status.short === "1H" ||
        fixture.fixture.status.short === "2H" ||
        fixture.fixture.status.short === "HT") && (
        <span className="text-xs font-bold">
          🔴 LIVE{" "}
          {fixture.fixture.status.short == "HT"
            ? "MT"
            : `${fixture.fixture.status.elapsed}${"'"}`}
        </span>
      )}
    </div>
  );
};

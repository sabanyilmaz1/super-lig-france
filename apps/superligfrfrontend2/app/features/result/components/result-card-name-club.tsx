import type { Fixture } from "~/features/fixtures-results/fixture.domain";
import type { ResultFixture } from "../result.domain";

export const ResultItemNameLogoHome = ({
  result,
}: {
  result: ResultFixture | Fixture;
}) => {
  const participant = result.participants.find(
    (item) => item.meta.location === "home"
  );
  return (
    <>
      <span className="justify-end hidden font-medium md:flex w-44">
        {participant?.name}
      </span>
      <img
        src={participant?.image_path}
        className="w-12 h-12 "
        alt={`${participant?.name} logo`}
      />
    </>
  );
};

export const ResultItemNameLogoAway = ({
  result,
}: {
  result: ResultFixture | Fixture;
}) => {
  const participant = result.participants.find(
    (item) => item.meta.location === "away"
  );
  return (
    <>
      <img
        src={participant?.image_path}
        className="w-12 h-12 "
        alt={`${participant?.name} logo`}
      />
      <span className="hidden w-40 font-medium md:flex ">
        {participant?.name}
      </span>
    </>
  );
};

import type { ResultFixture } from "../result.domain";

export const ResultItemNameLogoHome = ({
  result,
}: {
  result: ResultFixture;
}) => {
  return (
    <>
      <span className="justify-end hidden font-medium md:flex w-44">
        {result.participants[0].name}
      </span>
      <img
        src={result.participants[0].image_path}
        className="w-12 h-12 "
        alt={`${result.participants[0].name} logo`}
      />
    </>
  );
};

export const ResultItemNameLogoAway = ({
  result,
}: {
  result: ResultFixture;
}) => {
  return (
    <>
      <img
        src={result.participants[1].image_path}
        className="w-12 h-12 "
        alt={`${result.participants[1].name} logo`}
      />
      <span className="hidden w-40 font-medium md:flex ">
        {result.participants[1].name}
      </span>
    </>
  );
};

import type { Standing } from "~/features/standing/domain/standing.domain";
import type { FixturePreview as FixturePreviewType } from "../../fixture.domain";

interface FixturePreviewFaceToFaceProps {
  data: FixturePreviewType;
  standing: Standing[] | undefined;
}

export const FixturePreviewFaceToFace = ({
  data,
  standing,
}: FixturePreviewFaceToFaceProps) => {
  return <div>FixturePreviewFaceToFace</div>;
};

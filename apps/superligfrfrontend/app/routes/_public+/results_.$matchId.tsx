import { useParams } from "react-router";
import { MatchDetailsPage } from "~/features/match-details/match-details-page";

export default function ResultPage() {
  const { matchId } = useParams();
  return (
    <div>
      <MatchDetailsPage />
    </div>
  );
}

import { useParams } from "@remix-run/react";

export default function ResultPage() {
  const { matchId } = useParams();
  return <div>Result : {matchId} </div>;
}

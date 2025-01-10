import { ResultsLoader } from "~/features/results/results-loader.server";
import { ResultPage } from "~/features/results/results-page";

export let loader = ResultsLoader;
export default function Results() {
  return <ResultPage />;
}

import { HeaderPage } from "~/components/layout/header-page";
import { ResultsFilter } from "./components/results-filter";
import { ResultsListView } from "./components/results-list-view";
import { useResultByRound } from "./hooks/use-result-by-round";

export const ResultPage = () => {
  const { isLoading, results, selectedMatchday, setSelectedMatchday } =
    useResultByRound();

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen">
      <HeaderPage
        title="Résultats"
        subtitle="Suivez les résultats de la Süper Lig"
      />
      <div className="p-4 container mx-auto ">
        <div className=" py-3 md:py-8 flex justify-between items-center">
          <h1 className=" font-extrabold text-redsuperlig text-xl md:text-3xl">
            Journée {selectedMatchday}
          </h1>
          <ResultsFilter
            selectedMatchday={selectedMatchday}
            setSelectedMatchday={setSelectedMatchday}
          />
        </div>
        {/* Les matchs */}
        {results && <ResultsListView results={results} />}
      </div>
    </div>
  );
};

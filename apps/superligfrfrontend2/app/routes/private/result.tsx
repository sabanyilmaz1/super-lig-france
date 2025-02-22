import { HeaderPage } from "~/components/common/header-page";
import { FullResult } from "~/features/result/components/full-result";

export default function ResultPage() {
  return (
    <div className="min-h-screen">
      <HeaderPage
        title="Résultats"
        subtitle="Suivez les résultats de la Süper Lig"
      />
      <div className="container p-4 mx-auto ">
        <FullResult />
      </div>
    </div>
  );
}

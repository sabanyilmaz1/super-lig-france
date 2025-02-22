import { HeaderPage } from "~/components/common/header-page";
import { FullFixture } from "~/features/fixtures-results/components/full-fixture";

export default function FixturePage() {
  return (
    <div className="min-h-screen">
      <HeaderPage
        title="Calendrier en cours"
        subtitle="Suivez le calendrier en cours de la Süper Lig"
      />
      <div className="container p-4 mx-auto ">
        <FullFixture />
      </div>
    </div>
  );
}

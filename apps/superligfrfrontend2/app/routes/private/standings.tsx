import { HeaderPage } from "~/components/common/header-page";
import { FullStanding } from "~/features/standing/components/full-standing";

export default function StandingsPage() {
  return (
    <div className="min-h-screen">
      <HeaderPage
        title="Classement"
        subtitle="Suivez le classement de la Süper Lig"
      />
      <div className="container p-4 mx-auto ">
        <FullStanding />
      </div>
    </div>
  );
}

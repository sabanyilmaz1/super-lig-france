import { HeaderPage } from "~/components/layout/header-page";
import { StandingTable } from "./components/standing-table";
import { useLoaderData } from "react-router";
import { loader } from "~/routes/_public/standing/route";

export const StandingPage = () => {
  const data = useLoaderData<typeof loader>();

  if (!data || !data.response) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <HeaderPage
        title="Classement"
        subtitle="Suivez le classement de la Süper Lig"
      />
      <div className="p-4 container mx-auto ">
        <StandingTable standing={data.response[0].league.standings[0]} />
      </div>
    </div>
  );
};

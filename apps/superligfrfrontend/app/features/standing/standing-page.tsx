import React from "react";
import { HeaderPage } from "~/components/layout/header-page";
import { StandingTable } from "./standing-table";

export const StandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeaderPage
        title="Classement"
        subtitle="Suivez le classement de la Süper Lig"
      />
      <div className="pt-4 px-4 container md:pb-8 md:p-0 md:flex flex-col md:justify-between md:gap-4 mx-auto md:pt-12">
        <StandingTable />
      </div>
    </div>
  );
};

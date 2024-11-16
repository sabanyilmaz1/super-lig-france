import { useLoaderData } from "@remix-run/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { BestPlayersHomeView } from "~/features/home/best-players/best-players.view";
import { BestTeamsHomeView } from "~/features/home/best-teams.view";
import { BlogHomeView } from "~/features/home/blog.view";
import { loaderHome } from "~/features/home/loader.server";
import { NextGamesHomeView } from "~/features/home/next-game/next-games.view";
import { TableHomeView } from "~/features/home/table/table.view";
import { TwitterCta } from "~/features/home/twitter-cta";

export let loader = loaderHome;

export default function HomePage() {
  const data = useLoaderData<typeof loader>();

  console.log("dataa", data);

  const { lastFixtureData, standingData, topscorersData, topassistsData } =
    data;

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden p-3">
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recent">Récent</TabsTrigger>
            <TabsTrigger value="results">Matchs</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <div className=" space-y-4">
              <BlogHomeView />
              <BestPlayersHomeView
                topscorersData={topscorersData}
                topassistsData={topassistsData}
              />
              <BestTeamsHomeView standingData={standingData} />
            </div>
          </TabsContent>
          <TabsContent value="results">
            <div className=" space-y-4">
              <NextGamesHomeView
                round={lastFixtureData.parameters.round}
                fixtures={lastFixtureData.response}
              />
              <TableHomeView table={standingData} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Desktop Tablet */}
      <div className="hidden md:container md:pb-8 md:p-0 md:flex flex-col md:justify-between md:gap-4 md:flex-row mx-auto md:pt-12">
        <div className="md:w-[30%] space-y-4">
          <NextGamesHomeView
            round={lastFixtureData.parameters.round}
            fixtures={lastFixtureData.response}
          />
          <TableHomeView table={standingData} />
          <TwitterCta />
        </div>
        <div className="md:w-[70%] space-y-4">
          <BlogHomeView />
          <BestPlayersHomeView
            topscorersData={topscorersData}
            topassistsData={topassistsData}
          />
          <BestTeamsHomeView standingData={standingData} />
        </div>
      </div>
    </>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { BlogHomeView } from "./blog/blog.view";
import { BestPlayersHomeView } from "./best-players/best-players.view";
import { BestTeamsHomeView } from "./best-teams/best-teams.view";
import { NextGamesHomeView } from "../fixture/next-game-home/next-games.view";
import { TableHomeView } from "./table/table.view";
import { TwitterCta } from "../../components/layout/twitter-cta";

import { ResponseApiFoot } from "@monorepo/shared/types/api-foot";

type HomePageProps = {
  data: {
    lastFixtureData: ResponseApiFoot<any>;
    standingData: ResponseApiFoot<any>;
    topscorersData: ResponseApiFoot<any>;
    topassistsData: ResponseApiFoot<any>;
    articlesData: any;
    error?: string;
  };
};

export const HomePage = ({ data }: HomePageProps) => {
  const {
    lastFixtureData,
    standingData,
    topscorersData,
    topassistsData,
    articlesData,
  } = data;

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden p-3">
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recent">Récent</TabsTrigger>
            <TabsTrigger value="results">Matchs</TabsTrigger>
            <TabsTrigger value="stat">Statistiques</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <div className=" space-y-4">
              <BlogHomeView articles={articlesData} />
            </div>
          </TabsContent>
          <TabsContent value="results">
            <div className=" space-y-4">
              <NextGamesHomeView
                round={lastFixtureData.parameters.round || "1"}
                fixtures={lastFixtureData.response}
              />
              <TableHomeView table={standingData} />
            </div>
          </TabsContent>

          <TabsContent value="stat">
            <div className=" space-y-4">
              <BestPlayersHomeView
                topscorersData={topscorersData}
                topassistsData={topassistsData}
              />
              <BestTeamsHomeView standingData={standingData} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Desktop Tablet */}
      <div className="hidden md:container md:pb-8 md:p-0 md:flex flex-col md:justify-between md:gap-4 md:flex-row mx-auto md:pt-12">
        <div className="md:w-[30%] space-y-4">
          <NextGamesHomeView
            round={lastFixtureData.parameters.round || "1"}
            fixtures={lastFixtureData.response}
          />
          <TableHomeView table={standingData} />
          <TwitterCta />
        </div>
        <div className="md:w-[70%] space-y-4">
          <BlogHomeView articles={articlesData} />
          <BestPlayersHomeView
            topscorersData={topscorersData}
            topassistsData={topassistsData}
          />
          <BestTeamsHomeView standingData={standingData} />
        </div>
      </div>
    </>
  );
};

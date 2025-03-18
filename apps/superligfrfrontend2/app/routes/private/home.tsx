import { TwitterCta } from "~/components/common/twitter-cta";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { BlogHomeContent } from "~/features/blog/components/blog-home-content";
import { FixtureHomeContent } from "~/features/fixtures-results/components/fixture-home-content";
import { StandingHomeContent } from "~/features/standing/components/standing-home-content";
import { StandingPlayersHomeContent } from "~/features/standing/components/standing-players-home-content";
import StandingTeamHomeContent from "~/features/standing/components/standing-team-home-content";

export default function Home() {
  return (
    <div>
      {/* Mobile */}
      <div className="p-3 md:hidden">
        <Tabs defaultValue="results" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recent">Récent</TabsTrigger>
            <TabsTrigger value="results">Matchs</TabsTrigger>
            <TabsTrigger value="stat">Statistiques</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <div className="space-y-4 ">
              <BlogHomeContent />
            </div>
          </TabsContent>
          <TabsContent value="results">
            <div className="space-y-4 ">
              <FixtureHomeContent />
              <StandingHomeContent />
            </div>
          </TabsContent>
          <TabsContent value="stat">
            <div className="space-y-4 ">
              <StandingPlayersHomeContent />
              <StandingTeamHomeContent />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Desktop Tablet */}
      <div className="flex-col hidden mx-auto md:container md:pb-8 md:p-0 md:flex md:justify-between md:gap-4 md:flex-row md:pt-12">
        <div className="md:w-[30%] space-y-4">
          <FixtureHomeContent />
          <StandingHomeContent />
          <TwitterCta />
        </div>
        <div className="md:w-[70%] space-y-4">
          <BlogHomeContent />
          <StandingPlayersHomeContent />
          <StandingTeamHomeContent />
        </div>
      </div>
    </div>
  );
}

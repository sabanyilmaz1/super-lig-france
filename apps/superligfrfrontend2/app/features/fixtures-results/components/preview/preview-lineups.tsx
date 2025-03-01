import type { FixturePreview as FixturePreviewType } from "../../fixture.domain";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { LineupPreview } from "~/components/features/lineup/lineup-preview";
import { Bench } from "~/components/features/lineup/bench";
export const FixturePreviewLineups = ({
  data,
}: {
  data: FixturePreviewType;
}) => {
  if (!data.sidelined || data.sidelined.length === 0) {
    return <div>No absence</div>;
  }

  const lineupHome =
    data.lineups?.filter(
      (item) =>
        item.team_id ===
        data.formations?.find((f) => f.location === "home")?.participant_id
    ) ?? [];

  const lineupAway =
    data.lineups?.filter(
      (item) =>
        item.team_id ===
        data.formations?.find((f) => f.location === "away")?.participant_id
    ) ?? [];

  return (
    <ScrollArea className="h-[500px]">
      <div>
        <Tabs defaultValue="home">
          <TabsList className="flex justify-center mx-auto md:mx-0 w-fit">
            <TabsTrigger value="home">
              {data.participants?.find((p) => p.meta.location === "home")?.name}
            </TabsTrigger>
            <TabsTrigger value="away">
              {data.participants?.find((p) => p.meta.location === "away")?.name}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <div className="flex flex-col gap-4 md:flex-row">
              <LineupPreview data={lineupHome} formations={data.formations} />
              <Bench data={lineupHome} />
            </div>
          </TabsContent>
          <TabsContent value="away">
            <div className="flex flex-col gap-4 md:flex-row">
              <LineupPreview data={lineupAway} formations={data.formations} />
              <Bench data={lineupAway} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

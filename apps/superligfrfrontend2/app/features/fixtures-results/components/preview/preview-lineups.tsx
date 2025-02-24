import type { FixturePreview as FixturePreviewType } from "../../fixture.domain";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { LineupPreview } from "~/components/common/lineup";
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

  console.log(lineupHome, lineupAway);

  return (
    <ScrollArea className="h-[500px]">
      <div>
        <Tabs defaultValue="home">
          <TabsList className="text-white bg-redsuperlig">
            <TabsTrigger value="home">
              {data.participants?.find((p) => p.meta.location === "home")?.name}
            </TabsTrigger>
            <TabsTrigger value="away">
              {data.participants?.find((p) => p.meta.location === "away")?.name}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <LineupPreview data={lineupHome} formations={data.formations} />
          </TabsContent>
          <TabsContent value="away">
            <LineupPreview data={lineupAway} formations={data.formations} />
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

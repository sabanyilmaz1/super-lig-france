import { Card, CardContent } from "~/components/ui/card";
import type {
  FixturePreview as FixturePreviewType,
  Sidelined,
} from "../fixture.domain";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-dropdown-menu";
export const FixturePreviewInjuries = ({
  data,
}: {
  data: FixturePreviewType;
}) => {
  if (!data.sidelined || data.sidelined.length === 0) {
    return <div>No absence</div>;
  }

  const sidelinedHome = data.sidelined.filter(
    (item) => item.participant_id === data.formations?.[0]?.participant_id
  );

  const sidelinedAway = data.sidelined.filter(
    (item) => item.participant_id === data.formations?.[1]?.participant_id
  );

  return (
    <ScrollArea className="h-[500px]">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          {sidelinedHome.map((item) => (
            <InjuryItem key={item.id} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {sidelinedAway.map((item) => (
            <InjuryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

const InjuryItem = ({ item }: { item: Sidelined }) => {
  return (
    <Card className="border-2 shadow-sm">
      <CardContent className="p-3">
        <div className="flex gap-3">
          <div className="relative flex-shrink-0">
            <img
              src={item.sideline.player.image_path}
              alt={item.sideline.player.name}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-medium truncate">
              {item.sideline.player.common_name}
            </h3>
            <p className="text-xs font-medium text-red-500 mt-0.5 truncate">
              {item.sideline.category}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

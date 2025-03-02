import type {
  FixturePreview as FixturePreviewType,
  Sidelined,
} from "../../fixture.domain";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Heart } from "lucide-react";
import type { ParticipantWithMeta } from "~/core/domain/football-api";
export const FixturePreviewInjuries = ({
  data,
}: {
  data: FixturePreviewType;
}) => {
  if (!data.sidelined || data.sidelined.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg bg-gray-50">
        <div className="p-3 mb-4 rounded-full bg-yellow-50">
          <Heart size={40} className="text-yellow-600" />
        </div>
        <h3 className="mb-2 font-bold text-gray-800">Aucune absence</h3>
      </div>
    );
  }

  const sidelinedHome = data.sidelined.filter(
    (item) =>
      item.participant_id ===
      data.formations?.find((f) => f.location === "home")?.participant_id
  );

  const sidelinedAway = data.sidelined.filter(
    (item) =>
      item.participant_id ===
      data.formations?.find((f) => f.location === "away")?.participant_id
  );

  return (
    <ScrollArea className="h-[500px]">
      <div>
        <div className="flex justify-between gap-4 px-2">
          <InjuryItem
            team={data.participants?.find((p) => p.meta.location === "home")}
            sidelined={sidelinedHome}
          />
          <InjuryItem
            team={data.participants?.find((p) => p.meta.location === "away")}
            sidelined={sidelinedAway}
          />
        </div>
      </div>
    </ScrollArea>
  );
};

const InjuryItem = ({
  team,
  sidelined,
}: {
  team: ParticipantWithMeta | undefined;
  sidelined: Sidelined[];
}) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className="font-semibold ">{team?.name}</h1>
        <img
          src={team?.image_path}
          alt={team?.name}
          className="rounded-full w-7 h-7"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {sidelined.map((item) => (
          <div className="flex items-center gap-2" key={item.id}>
            <div className="relative w-12 h-12 p-1 bg-white rounded-full ">
              <img
                src={item.sideline.player.image_path}
                alt={item.sideline.player.display_name}
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full">
                {item.sideline.category === ("injury" as string) ? (
                  <div></div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <p className="text-xs">{item.sideline.player.display_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

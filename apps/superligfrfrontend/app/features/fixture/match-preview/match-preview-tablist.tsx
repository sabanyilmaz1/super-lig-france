import { TabsList, TabsTrigger } from "~/components/ui/tabs";

export const MatchPreviewTablist = () => {
  return (
    <TabsList className="grid w-full grid-cols-4 bg-redsuperlig/30 text-redsuperlig">
      <TabsTrigger value="stats">Prédictions</TabsTrigger>
      <TabsTrigger value="injuries">Blessures</TabsTrigger>
      <TabsTrigger value="lineup">Composition</TabsTrigger>
      <TabsTrigger value="history">Historique</TabsTrigger>
    </TabsList>
  );
};

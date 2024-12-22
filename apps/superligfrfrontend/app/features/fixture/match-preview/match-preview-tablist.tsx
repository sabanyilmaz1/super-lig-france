import { TabsList, TabsTrigger } from "~/components/ui/tabs";

export const MatchPreviewTablist = () => {
  return (
    <TabsList className="grid w-full grid-cols-4">
      <TabsTrigger value="injuries">Blessures</TabsTrigger>
      <TabsTrigger value="stats">Statistiques</TabsTrigger>
      <TabsTrigger value="lineup">Composition</TabsTrigger>
      <TabsTrigger value="history">Historique</TabsTrigger>
    </TabsList>
  );
};

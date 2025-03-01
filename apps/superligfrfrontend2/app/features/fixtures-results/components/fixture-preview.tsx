import { EyeIcon } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "~/components/hooks/use-mobile";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { useGetFixturePreview } from "../use-get-fixture-preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import type { FixturePreview as FixturePreviewType } from "../fixture.domain";
import { FixturePreviewInjuries } from "./preview/preview-injuries";
import { FixturePreviewLineups } from "./preview/preview-lineups";

interface FixturePreviewProps {
  fixtureId: number;
}

export const FixturePreview = ({ fixtureId }: FixturePreviewProps) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const {
    data: fixturePreview,
    isLoading,
    isFetching,
  } = useGetFixturePreview(fixtureId, open);

  if (isLoading || isFetching) return <div>Loading...</div>;

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <EyeIcon className="w-4 h-4" />
            Aperçu rapide
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Détails du match</DrawerTitle>
            <DrawerDescription>
              Informations détaillées sur le match
            </DrawerDescription>
          </DrawerHeader>
          <FixturePreviewContent data={fixturePreview} />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button className="text-white bg-redsuperlig" variant="outline">
                Fermer
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <EyeIcon className="w-4 h-4" />
          Aperçu rapide
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Aperçu du match</DialogTitle>
        </DialogHeader>
        <FixturePreviewContent data={fixturePreview} />
      </DialogContent>
    </Dialog>
  );
};

const FixturePreviewContent = ({
  data,
}: {
  data: FixturePreviewType | undefined;
}) => {
  if (!data) return null;

  return (
    <div>
      <Tabs defaultValue="stats" className="w-full min-h-[500px]">
        <TabsList className="flex justify-center mx-auto text-white bg-redsuperlig w-fit md:mx-0">
          <TabsTrigger
            className="text-xs font-semibold md:text-sm"
            value="stats"
          >
            Face à face
          </TabsTrigger>
          <TabsTrigger
            className="text-xs font-semibold md:text-sm"
            value="injuries"
          >
            Absences
          </TabsTrigger>
          <TabsTrigger
            className="text-xs font-semibold md:text-sm"
            value="lineup"
          >
            Composition
          </TabsTrigger>
          <TabsTrigger
            className="text-xs font-semibold md:text-sm"
            value="history"
          >
            Historique
          </TabsTrigger>
        </TabsList>
        <TabsContent className="px-2 py-2 md:px-0" value="injuries">
          <FixturePreviewInjuries data={data} />
        </TabsContent>
        <TabsContent className="px-2 py-2 md:px-0" value="lineup">
          <FixturePreviewLineups data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

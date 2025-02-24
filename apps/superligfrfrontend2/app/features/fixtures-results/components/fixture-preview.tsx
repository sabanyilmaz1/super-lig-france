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
import { FixturePreviewInjuries } from "./preview-injuries";

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
              <Button variant="outline">Fermer</Button>
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
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Détails du match</DialogTitle>
          <DialogDescription>
            Informations détaillées sur le match
          </DialogDescription>
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

  console.log(data);

  return (
    <div>
      <Tabs defaultValue="stats" className="w-full min-h-[500px]">
        <TabsList>
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
        <TabsContent className="py-2" value="injuries">
          <FixturePreviewInjuries data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

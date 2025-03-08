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
import { useGetStanding } from "~/features/standing/hooks/use-get-standing";
import { FixturePreviewFaceToFace } from "./preview/preview-face-to-face";
import type { Standing } from "~/features/standing/domain/standing.domain";

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

  const { data: standing } = useGetStanding();

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
          <DrawerHeader className="w-full px-6 mx-auto text-left">
            <DrawerTitle>Aperçu du match</DrawerTitle>
            <DrawerDescription>
              Informations détaillées sur le match
            </DrawerDescription>
          </DrawerHeader>
          <FixturePreviewContent data={fixturePreview} standing={standing} />
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
        <FixturePreviewContent data={fixturePreview} standing={standing} />
      </DialogContent>
    </Dialog>
  );
};

const FixturePreviewContent = ({
  data,
  standing,
}: {
  data: FixturePreviewType | undefined;
  standing: Standing[] | undefined;
}) => {
  if (!data) return null;

  console.log(data);

  return (
    <div>
      <Tabs defaultValue="face-to-face" className="w-full min-h-[500px]">
        <TabsList className="flex justify-center mx-auto text-white bg-redsuperlig w-fit md:mx-0">
          <TabsTrigger
            className="text-xs font-semibold md:text-sm"
            value="face-to-face"
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
        </TabsList>
        <TabsContent className="px-4 py-2 md:px-0" value="injuries">
          <FixturePreviewInjuries data={data} />
        </TabsContent>
        <TabsContent className="px-2 py-2 md:px-0" value="lineup">
          <FixturePreviewLineups data={data} />
        </TabsContent>
        <TabsContent className="px-2 py-2 md:px-0" value="face-to-face">
          <FixturePreviewFaceToFace data={data} standing={standing} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

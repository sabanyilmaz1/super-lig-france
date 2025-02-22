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
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";

export const FixturePreview = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Détails du match</DialogTitle>
          <DialogDescription>
            Informations détaillées sur le match
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}

import XLogo from "~/assets/icon/x.svg";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export const TwitterCta = () => {
  return (
    <Card className="bg-[#0000]/5 border-[#000]/20">
      <CardContent className="pt-2">
        <div className="flex flex-col items-center text-center space-y-2">
          <img src={XLogo} className="h-8 w-8 text-[#1DA1F2]" alt="" />
          <div className="">
            <h3 className="font-bold text-sm">Restez connecté !</h3>
            <p className="text-xs text-muted-foreground">
              Suivez-nous sur X pour les dernières actualités et mises à jour en
              temps réel
            </p>
          </div>
          <Button
            className="bg-white border-2 border-[#000]/20 hover:bg-transparent text-black"
            onClick={() =>
              window.open("https://twitter.com/votre_compte", "_blank")
            }
          >
            <img src={XLogo} className="h-4 w-4 mr-2" alt="" />
            Suivre @votre_compte
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

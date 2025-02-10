import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export const TwitterCta = () => {
  return (
    <Card className="bg-[#0000]/5 border-[#000]/20">
      <CardContent className="pt-2">
        <div className="flex flex-col items-center space-y-2 text-center">
          <TwitterLogo width={40} height={40} />
          <div className="">
            <h3 className="text-sm font-bold">Restez connecté !</h3>
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
            <TwitterLogo />
            Suivre @votre_compte
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface TwitterLogoProps {
  width?: number;
  height?: number;
}

const TwitterLogo = ({ width = 100, height = 100 }: TwitterLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
    </svg>
  );
};

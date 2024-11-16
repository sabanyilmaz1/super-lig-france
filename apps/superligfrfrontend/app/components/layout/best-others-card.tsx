import { Card, CardContent } from "../ui/card";

interface BestOthersCardProps {
  image_sup?: string;
  image_principal: string;
  firstText: string;
  secondText: string;
  number: number;
  index: number;
}

export const BestOthersCard = ({
  image_sup,
  image_principal,
  firstText,
  secondText,
  number,
  index,
}: BestOthersCardProps) => {
  return (
    <Card className="hover:bg-muted/50 transition-colors shadow-lg">
      <CardContent className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold w-6">{index + 2}</span>
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img src={image_principal} alt="" />
            </div>
            {image_sup && <img src={image_sup} className="w-6 h-6" />}
            <div>
              <div className="font-semibold">{firstText}</div>
              <div className="text-sm text-muted-foreground">{secondText}</div>
            </div>
          </div>
        </div>
        <span className="text-2xl font-bold">{number}</span>
      </CardContent>
    </Card>
  );
};

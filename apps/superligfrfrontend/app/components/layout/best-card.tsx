import { cn } from "~/lib/utils";
import { Card, CardContent } from "../ui/card";

interface BestCardProps {
  firstText: string;
  secondText?: string;
  third_text: string;
  logo_sup?: string;
  logo_principal: string;
  number: number;
  className?: string;
}

export const BestCard = ({
  firstText,
  secondText,
  third_text,
  logo_sup,
  logo_principal,
  number,
  className,
}: BestCardProps) => {
  return (
    <Card className={cn(" overflow-hidden mt-4", className)}>
      <CardContent className="p-1">
        <div className="p-4 flex justify-between items-end">
          <div className="space-y-1">
            <div className="text-3xl font-bold text-white">1</div>
            <div className="text-xl font-bold text-white">{firstText}</div>
            {secondText && (
              <div className="text-3xl font-bold text-white">{secondText}</div>
            )}
            <div className="flex items-center gap-2">
              {logo_sup && (
                <img src={logo_sup} className="w-6 h-6 rounded-full" />
              )}
              <span className="text-white">{third_text}</span>
            </div>
          </div>
          <div className="text-6xl font-bold text-white">{number}</div>
          <div className="w-20 h-24 relative ">
            <img src={logo_principal} className=" object-cover  rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

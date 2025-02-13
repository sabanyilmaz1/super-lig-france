import React from "react";
import { Card, CardContent } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import type { PlayerStanding } from "../domain/player-standing.domain";

interface TopPlayersHomeProps {
  data: PlayerStanding[] | undefined;
  title: string;
  backgroundColor?: string;
  textColor?: string;
}

export const TopPlayersHome = <T,>({
  data,
  title,
  backgroundColor,
  textColor,
}: TopPlayersHomeProps) => {
  return (
    <div>
      <h2 className={cn("text-2xl font-bold", textColor)}>{title}</h2>
      {/* TOP PLAYER */}
      {data?.slice(0, 1).map((item) => (
        <Card
          className={cn(
            " overflow-hidden mt-4 bg-gradient-to-r ",
            backgroundColor
          )}
        >
          <CardContent className="p-1">
            <div className="flex items-end justify-between p-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">1</div>
                <div className="text-xl font-bold text-white">
                  {item.player.firstname}
                </div>
                {item.player.lastname && (
                  <div className="text-3xl font-bold text-white">
                    {item.player.lastname}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  {item.participant.image_path && (
                    <img
                      src={item.participant.image_path}
                      className="w-6 h-6 rounded-full"
                    />
                  )}
                  <span className="text-white">{item.participant.name}</span>
                </div>
              </div>
              <div className="text-6xl font-bold text-white">{item.total}</div>
              <div className="relative w-20 h-24 ">
                <img
                  src={item.player.image_path}
                  className="object-cover rounded-full "
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      {/* OTHER PLAYERS */}
      <div className="pt-2 space-y-2">
        {data?.slice(1, 5).map((item, index) => (
          <Card className="transition-colors shadow-lg hover:bg-muted/50">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <span className="w-6 text-xl font-bold">{index + 2}</span>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full">
                    <img src={item.player.image_path} alt="" />
                  </div>
                  {item.participant.image_path && (
                    <img
                      src={item.participant.image_path}
                      className="w-6 h-6"
                    />
                  )}
                  <div>
                    <div className="font-semibold">{item.player.firstname}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.player.lastname}
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-2xl font-bold">{item.total}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

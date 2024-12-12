import * as React from "react";
import { Label } from "~/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { teams } from "~/data/teams";

export function SelectClub() {
  return (
    <div>
      <Label htmlFor="club">Équipe favorite</Label>
      <Select name="club">
        <SelectTrigger className="w-full border bg-white">
          <SelectValue placeholder="Sélectionnez votre équipe favorite" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Club</SelectLabel>
            {teams.map((team) => (
              <SelectItem key={team.team.id} value={String(team.team.id)}>
                <div className="flex items-center gap-2">
                  <img src={team.team.logo} className=" size-6" alt="" />
                  {team.team.name}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

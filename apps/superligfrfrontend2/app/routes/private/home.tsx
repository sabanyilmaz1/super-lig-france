import { useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Http } from "~/core/api/http";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3333/me", {
      credentials: "include",
      headers: {
        Origin: "http://localhost:3333",
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest", // Important pour AdonisJS
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      {/* Mobile */}
      <div className="p-3 md:hidden">
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recent">Récent</TabsTrigger>
            <TabsTrigger value="results">Matchs</TabsTrigger>
            <TabsTrigger value="stat">Statistiques</TabsTrigger>
          </TabsList>
          <TabsContent value="recent">
            <div className="space-y-4 ">BLOG</div>
          </TabsContent>
          <TabsContent value="results">
            <div className="space-y-4 ">NEXT GAMES CLASSMENT</div>
          </TabsContent>
          <TabsContent value="stat">
            <div className="space-y-4 ">BEST PLAYERS BEST TEAMS</div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Desktop Tablet */}
      <div className="flex-col hidden mx-auto md:container md:pb-8 md:p-0 md:flex md:justify-between md:gap-4 md:flex-row md:pt-12">
        <div className="md:w-[30%] space-y-4">NEXT GAME CLASSMENT TWITTER</div>
        <div className="md:w-[70%] space-y-4">BLOG BEST PLAYERS BEST TEAMS</div>
      </div>
    </div>
  );
}

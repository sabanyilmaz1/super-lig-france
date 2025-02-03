import { LoaderFunction } from "react-router";
import { useLoaderData } from "react-router";
import { ClubsBanner } from "~/components/layout/clubs-banner";
import { Navbar } from "~/components/layout/navbar";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { teams } from "~/data/teams";
import { cn } from "~/lib/utils";
import { fetchWithAuth } from "~/utils/api.server";
import { requireUserSession } from "~/utils/auth.server";

const BASE_URL = process.env.BASE_URL;

export let loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  const response = await fetchWithAuth(request, `${BASE_URL}me`, {
    method: "GET",
  });
  const data = await response.json();

  if (data) {
    return Response.json({
      user: data.user,
    });
  } else {
    return Response.json({ user: data.user, error: null });
  }
};

export default function ProfilPage() {
  const dataUser = useLoaderData<typeof loader>();
  const team_favorite_id = 611;

  return (
    <div>
      <ClubsBanner />
      <Navbar user={dataUser.user} />
      <main className="container mx-auto md:pt-12 ">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Info Card */}
          <Card className="md:col-span-1">
            <CardHeader>
              <div className="flex flex-col items-center">
                {/* <Image src="/placeholder.svg" alt="User Avatar" width={120} height={120} className="rounded-full" /> */}
                <img
                  className="w-20 h-20"
                  src="https://avatar.iran.liara.run/public/boy?username=Ash"
                ></img>
                <CardTitle className="mt-4 text-2xl font-bold">
                  Saban93
                </CardTitle>
                <p className="text-gray-500">Membre depuis 2022</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <h3 className="font-semibold">Clé API Foot</h3>
                <p>34Erd*********</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>syilmazpro@gmail.com</p>
              </div>
              <h3 className="font-semibold mb-2">Équipe favorite</h3>
              <div className="grid grid-cols-5 pb-4">
                {teams.map((item) => (
                  <div
                    className={cn(
                      team_favorite_id === item.team.id
                        ? "border-4 border-red-700 w-fit rounded-full p-2"
                        : "border-4 border-transparent w-fit rounded-full p-2"
                    )}
                    key={item.team.id}
                  >
                    <img
                      src={item.team.logo}
                      alt={item.team.name}
                      className="w-8 h-8"
                    />
                  </div>
                ))}
              </div>
              <Button className="w-full bg-red-700 hover:bg-red-800">
                Éditer le profil
              </Button>
            </CardContent>
          </Card>
          {/* User Activity Tabs */}
          <Card className="md:col-span-2 p-4">
            <Tabs defaultValue="comments">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="comments">Commentaires</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>
              <TabsContent value="comments" className="mt-4 px-4">
                <h3 className="font-semibold mb-2">Derniers commentaires</h3>
                <ul className="space-y-2">
                  <li>
                    <p>"Excellent article, j'ai beaucoup appris!"</p>
                    <p className="text-sm text-gray-500">
                      Sur l'article "Tactiques modernes du football"
                    </p>
                  </li>
                  <li>
                    <p>"Je ne suis pas d'accord avec cette analyse..."</p>
                    <p className="text-sm text-gray-500">
                      Sur l'article "Prédictions pour la fin de saison"
                    </p>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>
  );
}

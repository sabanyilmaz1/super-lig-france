import { Link } from "@remix-run/react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import blogImage from "~/assets/blog.jpeg";

const blog = [
  {
    id: 1,
    title: "Fenerbahçe renforce sa défense avec une série de clean sheets",
    date: "Publié le 12 octobre 2024",
    content:
      "Depuis le début de la saison 2024/25, Fenerbahçe affiche une défense de fer, avec déjà six matchs sans encaisser de but. Grâce à des performances solides de ses défenseurs et de son gardien, l'équipe reste parmi les meilleures du championnat. Les supporters espèrent que cette constance défensive les mènera loin cette saison.",
  },
  {
    id: 2,
    title: "Mauro Icardi en tête des buteurs de la Süper Lig",
    date: "Publié le 11 octobre 2024",
    content:
      "L'attaquant vedette de Galatasaray, Mauro Icardi, domine le classement des buteurs cette saison avec des performances impressionnantes. Il a marqué dans presque chaque match depuis le début de la saison, propulsant Galatasaray en tête du championnat. Sa précision et son instinct de buteur continuent de surprendre la Süper Lig.",
  },
  {
    id: 3,
    title: "Beşiktaş rebondit avec une victoire spectaculaire contre Sivasspor",
    date: "Publié le 10 octobre 2024",
    content:
      "Après un début de saison difficile, Beşiktaş retrouve son rythme avec une victoire impressionnante contre Sivasspor. Dans un match marqué par de nombreux rebondissements, l'équipe a montré un esprit combatif et une offensive efficace. Les fans espèrent que cette victoire marquera le début d'une série positive.",
  },
];

export const BlogHomeView = () => {
  return (
    <Card className="border-2 border-redsuperlig bg-gradient-to-r from-red-700 to-red-500 shadow-lg min-h-[400px]">
      <CardHeader></CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3  lg:grid-cols-[70%_30%]">
          {/* Article Principal */}
          <Card className="overflow-hidden shadow-none  bg-transparent !border-none text-white">
            <CardContent className="space-y-4 !p-0">
              <div className="relative w-full  rounded-lg overflow-hidden">
                <img
                  src={blogImage}
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-xl font-bold ">
                  <Link href="#">
                    Galatasaray en tête, Fenerbahçe et Samsunspor en chasse
                  </Link>
                </h2>
                <div className="text-sm italic">Publié le 13 octobre 2024</div>
                <p className=" line-clamp-3">
                  Dans la saison 2024/25 de la Süper Lig, Galatasaray s'impose
                  comme le leader indiscutable avec 28 points en 10 matchs,
                  grâce à une série impressionnante de 9 victoires et 1 match
                  nul. L'attaquant star Mauro Icardi continue de briller en tête
                  des buteurs du championnat, propulsant l'équipe avec ses
                  performances décisives.
                </p>
                <Link href="#" className="inline-block hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Articles Récents */}
          <div className="space-y-2">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {blog.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden p-0 shadow-none  transition-colors bg-transparent text-white border-none"
                >
                  <CardContent className="!p-0">
                    <div className="flex flex-col gap-2">
                      <div className="relative w-full  flex-shrink-0  overflow-hidden">
                        <img
                          src={blogImage}
                          className="object-cover rounded-md hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-xs ">
                        <Link href="#">{article.title}</Link>
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

import { Link } from "@remix-run/react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import article1 from "~/assets/articles/article1.jpg";
import article2 from "~/assets/articles/article2.jpg";
import article3 from "~/assets/articles/article3.jpg";
import article4 from "~/assets/articles/article4.jpg";

import { Article } from "@monorepo/shared/types/article";

type BlogHomeViewProps = {
  articles: Article[];
};

export const BlogHomeView = ({ articles }: BlogHomeViewProps) => {
  if (!articles) {
    return null;
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <Card className="border-2 border-redsuperlig bg-gradient-to-r from-red-700 to-red-500 shadow-lg min-h-[400px]">
      <CardHeader></CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3  lg:grid-cols-[70%_30%]">
          {/* Article Principal */}
          <Card className="overflow-hidden shadow-none  bg-transparent !border-none text-white">
            <CardContent className="space-y-4 !p-0">
              <div className="relative w-[95%]  rounded-lg overflow-hidden">
                <img
                  src={article1}
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 px-6">
                <h2 className="text-xl font-bold ">
                  <Link to={"#"}>{articles[0].title}</Link>
                </h2>
                <div className="text-sm italic">Publié le 13 octobre 2024</div>
                <article
                  className="line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: articles[0].content }}
                />
                <Link to={"#"} className="inline-block hover:underline">
                  Lire la suite →
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Articles Récents */}
          <div className="space-y-2">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {articles
                .filter((_, index) => index !== 0)
                .map((article, index) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden p-0 shadow-none  transition-colors bg-transparent text-white border-none"
                  >
                    <CardContent className="!p-0">
                      <div className="flex flex-col gap-2">
                        <div className="relative w-full  flex-shrink-0  overflow-hidden">
                          <img
                            src={
                              index === 1
                                ? article2
                                : index === 2
                                  ? article3
                                  : article4
                            }
                            className="object-cover rounded-md hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-semibold text-xs ">
                          <Link to={`#`}>{article.title}</Link>
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

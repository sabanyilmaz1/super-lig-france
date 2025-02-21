import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { useGetBlog } from "../use-get-blog";
import { Link } from "react-router";
import { BlogHomeSkeleton } from "./skeleton";

export const BlogHomeContent = () => {
  const { data: articles, isLoading } = useGetBlog();

  if (isLoading || !articles || articles.length === 0) {
    return <BlogHomeSkeleton />;
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
                  src="/blog/article1.jpg"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="space-y-4 md:px-6">
                <h2 className="text-lg font-bold md:text-xl ">
                  <Link to={"#"}>{articles[0].title}</Link>
                </h2>
                <div className="text-sm italic">Publié le 13 octobre 2024</div>
                <article
                  className="text-sm line-clamp-4 md:line-clamp-3 md:text-base"
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
            <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
              {articles
                .filter((_, index) => index !== 0)
                .map((article, index) => (
                  <Card
                    key={article.id}
                    className="p-0 overflow-hidden text-white transition-colors bg-transparent border-none shadow-none"
                  >
                    <CardContent className="!p-0">
                      <div className="flex flex-col gap-2">
                        <div className="relative flex-shrink-0 w-full overflow-hidden">
                          <img
                            src={
                              index === 1
                                ? "/blog/article2.jpg"
                                : index === 2
                                ? "/blog/article3.jpg"
                                : "/blog/article4.jpg"
                            }
                            className="object-cover transition-transform duration-300 rounded-md hover:scale-110 md:w-full md:h-auto w-[140px] h-[80px] "
                          />
                        </div>
                        <h3 className="text-xs font-semibold ">
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

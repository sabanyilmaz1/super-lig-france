import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import type { Blog } from "../blog.domain";
import { ArrowRight } from "lucide-react";

export const BlogCard = ({ blog, image }: { blog: Blog; image: string }) => {
  return (
    <Card key={blog.id} className="grid grid-rows-[auto_auto_1fr_auto]">
      <div className="aspect-[16/9] w-full">
        <a
          href={blog.title}
          target="_blank"
          className="transition-opacity duration-200 fade-in hover:opacity-70"
        >
          <img
            src={image}
            alt={blog.title}
            className="object-cover object-center w-full h-full"
          />
        </a>
      </div>
      <CardHeader>
        <h3 className="text-lg font-semibold hover:underline md:text-xl">
          <a href={blog.title} target="_blank">
            {blog.title}
          </a>
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{blog.content.slice(0, 100)}...</p>
      </CardContent>
      <CardFooter>
        <a
          href={blog.title}
          target="_blank"
          className="flex items-center text-foreground hover:underline text-redsuperlig"
        >
          Lire la suite
          <ArrowRight className="ml-2 size-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

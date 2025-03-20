import { ButtonAllArticles } from "./button-all-articles";
import { BlogCard } from "./blog-card";
import type { Blog } from "../blog.domain";
import { useGetBlog } from "../use-get-blog";

const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with shadcn/ui Components",
    content:
      "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
    author: "Sarah Chen",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: 2,
    title: "Getting Started with shadcn/ui Components",
    content:
      "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
    author: "Sarah Chen",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: 3,
    title: "Getting Started with shadcn/ui Components",
    content:
      "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
    author: "Sarah Chen",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: 4,
    title: "Getting Started with shadcn/ui Components",
    content:
      "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
    author: "Sarah Chen",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
];

export const BlogList = () => {
  const { data: articles, isLoading } = useGetBlog();

  return (
    <div className="container flex flex-col items-center p-4 mx-auto ">
      <ButtonAllArticles />
      <div className="grid gap-6 mt-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {articles?.map((blog, index) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            image={`/blog/article${index + 1}.jpg`}
          />
        ))}
      </div>
    </div>
  );
};

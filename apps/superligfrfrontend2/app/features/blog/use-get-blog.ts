import { useFetchQuery } from "~/core/api/use-fetch-query";
import { BlogService } from "./blog.service";
import type { Blog } from "./blog.domain";

export function useGetBlog() {
  const blogService = new BlogService();
  return useFetchQuery<Blog[]>(
    ["blog"],
    () => blogService.getBlog() as Promise<Blog[]>,
    {
      requireAuth: true,
    }
  );
}

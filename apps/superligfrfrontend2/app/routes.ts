import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/index/index.tsx"),

  layout("routes/auth/layout.tsx", [
    route("login", "routes/auth/login.tsx"),
    route("register", "routes/auth/register.tsx"),
  ]),

  layout("routes/private/layout.tsx", [
    route("home", "routes/private/home.tsx"),
    route("standings", "routes/private/standings.tsx"),
    route("results", "routes/private/result.tsx"),
    route("fixture", "routes/private/fixture.tsx"),
    route("blog", "routes/private/blog.tsx"),
    route("blog/all-articles", "routes/private/blog-all-articles.tsx"),
  ]),
] satisfies RouteConfig;

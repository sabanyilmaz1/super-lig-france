import { useLoaderData } from "@remix-run/react";
import { HomePage } from "~/features/home/home-page";
import { loaderHome } from "~/features/home/loader.server";

export let loader = loaderHome;

export default function Home() {
  const data = useLoaderData<typeof loader>();

  return <HomePage data={data} />;
}

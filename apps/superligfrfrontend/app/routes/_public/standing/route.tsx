import { useLoaderData } from "@remix-run/react";
import { StandingPage } from "~/features/standing/standing-page";
import { loaderStanding } from "~/features/standing/standing-loader.server";

export let loader = loaderStanding;

export default function Standing() {
  const data = useLoaderData<typeof loader>();
  return <StandingPage />;
}

import { useLoaderData } from "@remix-run/react";
import { loaderFixture } from "~/features/fixture/fixture-loader.server";
import { FixturePage } from "~/features/fixture/fixture-page";

export let loader = loaderFixture;

export default function Fixture() {
  const data = useLoaderData<typeof loader>();
  return <FixturePage data={data} />;
}

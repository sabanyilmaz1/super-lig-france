import { useLoaderData } from "@remix-run/react";
import { loaderFixture } from "~/features/fixture/fixture-loader.server";
import { FixturePage } from "~/features/fixture/fixture-page";
import { fixturePreviewAction } from "~/features/fixture/fixture-preview.action";

export let loader = loaderFixture;

export let action  = fixturePreviewAction;


export default function Fixture() {
  
  const data = useLoaderData<typeof loader>();
  return <FixturePage data={data} />;
}

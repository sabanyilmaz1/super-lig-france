import { Outlet, useLoaderData, type LoaderFunction } from "react-router";
import { Banner } from "~/components/common/banner";
import { Navbar } from "~/components/common/navbar";
import { Http } from "~/core/api/http";
import { requireUserSession } from "~/core/auth/check-user-session";
import type { User } from "~/features/user/user.domain";

type LoaderData = {
  user: User | null;
};

export let loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData> => {
  await requireUserSession(request);
  //GET INFO USER
  const http = new Http();
  const user = await http.get<User>("/me", { request });
  if (!user) {
    return { user: null };
  }
  return { user };
};

export default function PrivateLayout() {
  const { user } = useLoaderData<LoaderData>();
  return (
    <main>
      <Banner />
      <Navbar user={user} />
      <Outlet />
    </main>
  );
}

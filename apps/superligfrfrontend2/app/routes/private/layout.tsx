import { Outlet, type LoaderFunction } from "react-router";
import { requireUserSession } from "~/core/auth/check-user-session";

export let loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
};

export default function PrivateLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
}

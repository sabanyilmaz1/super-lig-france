import { Outlet } from "react-router";
import { Banner } from "~/components/common/banner";
import { Navbar } from "~/components/common/navbar";
import { useRequireAuth } from "~/core/auth/check-user-session";

export default function PrivateLayout() {
  const { user, isLoading } = useRequireAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Banner />
      <Navbar user={user} />
      <Outlet />
    </main>
  );
}

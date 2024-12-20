import { Outlet } from "@remix-run/react";
import logo from "~/assets/logo/logo.png";
import Cover from "~/features/auth/cover";

export default function PrivateLayout() {
  return (
    <div className="w-full bg-muted relative lg:grid lg:min-h-screen lg:grid-cols-[47%_53%] xl:min-h-[800px]">
      <div className="flex flex-col items-center justify-center py-12">
        <img src={logo} alt="Logo" className="w-[150px]" />
        <div className="mx-auto grid w-[350px] gap-6">
          <Outlet />
        </div>
      </div>
      <div className="hidden  lg:flex items-start justify-start">
        <Cover />
      </div>
    </div>
  );
}

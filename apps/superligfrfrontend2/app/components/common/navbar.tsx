import { MenuIcon, User2Icon } from "lucide-react";
import { Link, NavLink } from "react-router";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { ProfilMenu, ProfilMenuMobile } from "~/features/user/user-profil-menu";

const navbarItems = [
  {
    id: 1,
    name: "BLOG",
    link: "/blog",
  },
  {
    id: 2,
    name: "CALENDRIER",
    link: "/fixture",
  },
  {
    id: 3,
    name: "CLASSEMENT",
    link: "/standing",
  },
  {
    id: 4,
    name: "RÉSULTATS",
    link: "/results",
  },
  {
    id: 5,
    name: "STATISTIQUES",
    link: "/statistiques",
  },
];

export const Navbar = ({ user }: { user: any }) => {
  return (
    <header className="sticky top-0 z-50 w-full text-white border-b bg-redsuperlig">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-0">
        <Link to="/home" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Superlig"
            className="w-16 md:w-20 md:h-20"
          />
        </Link>
        <nav className="items-center hidden gap-10 text-sm font-medium md:flex">
          {navbarItems.map((item) => (
            <NavLink
              className="relative text-xl font-bold group"
              key={item.id}
              to={item.link}
            >
              {item.name}
              <span className="absolute left-0 w-full h-1 transition-transform duration-300 ease-out origin-left scale-x-0 bg-white -bottom-2 group-hover:scale-x-100"></span>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild></DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4"></DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <MenuIcon className="w-5 h-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="font-bold text-white md:hidden bg-redsuperlig"
            >
              <div className="grid gap-4 p-4">
                {navbarItems.map((item) => (
                  <Link key={item.id} to={item.link}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="hidden md:block">
            <ProfilMenu username={user?.username} />
          </div>
          <div className="md:hidden">
            <ProfilMenuMobile username={user?.username} />
          </div>
        </div>
      </div>
    </header>
  );
};

import { Link, NavLink } from "@remix-run/react";
import { MenuIcon, MountainIcon, User2Icon } from "lucide-react";

import logo from "~/assets/logo/logo.png";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

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
    link: "/classement",
  },
  {
    id: 4,
    name: "RÉSULTATS",
    link: "/resultats",
  },
  {
    id: 5,
    name: "STATISTIQUES",
    link: "/statistiques",
  },
];

export const Navbar = ({ user }: { user: any }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-redsuperlig text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-0">
        <Link to="/home" className="flex items-center gap-2" prefetch={false}>
          <img src={logo} alt="Superlig" className=" w-16   md:w-24 md:h-24" />
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          {navbarItems.map((item) => (
            <NavLink
              className="font-bold text-xl relative group"
              key={item.id}
              to={item.link}
            >
              {item.name}
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
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
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="md:hidden bg-redsuperlig text-white font-bold"
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
          <div className=" hidden md:block">
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

const ProfilMenu = ({ username }: { username: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex gap-2 items-center font-semibold text-lg"
        >
          {username}
          <User2Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuItem>
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ProfilMenuMobile = ({ username }: { username: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex gap-2 items-center font-semibold text-lg"
        >
          <User2Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

import { User2Icon } from "lucide-react";
import { Link, useNavigate, type NavigateFunction } from "react-router";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const handleLogout = async (navigate: NavigateFunction) => {
  localStorage.removeItem("token");
  navigate("/login");
};

interface MenuContentProps {
  username: string;
  navigate: NavigateFunction;
  isMobile?: boolean;
}

const MenuContent = ({ username, navigate, isMobile }: MenuContentProps) => (
  <DropdownMenuContent align="end">
    {isMobile && (
      <>
        <DropdownMenuLabel>{username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
      </>
    )}
    <DropdownMenuItem>
      <Link to="/profil">Profil</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>Support</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => handleLogout(navigate)}>
      Se déconnecter
    </DropdownMenuItem>
  </DropdownMenuContent>
);

export const ProfilMenu = ({ username }: { username: string }) => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          {username}
          <User2Icon />
        </Button>
      </DropdownMenuTrigger>
      <MenuContent username={username} navigate={navigate} />
    </DropdownMenu>
  );
};

export const ProfilMenuMobile = ({ username }: { username: string }) => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <User2Icon />
        </Button>
      </DropdownMenuTrigger>
      <MenuContent username={username} navigate={navigate} isMobile />
    </DropdownMenu>
  );
};

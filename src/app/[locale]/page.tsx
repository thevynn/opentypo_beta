import { useTranslations } from "next-intl";

import { Menu, LogIn, User, Bookmark, Settings } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Home() {
  const t = useTranslations("Interface");
  return (
    <>
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="circle" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <LogIn className="mr-2 h-4 w-4" />
            <span className="font-semibold">{t("login")}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span className="font-medium">{t("profile")}</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bookmark className="mr-2 h-4 w-4" />
            <span className="font-medium">{t("bookmarks")}</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span className="font-medium">{t("settings")}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

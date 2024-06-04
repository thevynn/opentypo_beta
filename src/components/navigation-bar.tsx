"use client";

import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import HamburgerMenu from "@/components/hamburger-menu";
import Logo from "../../public/images/brandLogo.svg";

export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-20 w-screen flex items-center justify-between bg-white px-4 py-3 dark:bg-neutral-900 md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Logo
          color="primary dark:white"
          style={{ width: 100, transform: `translateY(2px)` }}
        />
      </Link>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <HamburgerMenu />
      </div>
    </header>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

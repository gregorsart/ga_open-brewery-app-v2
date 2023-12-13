"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { workFontClass } from "@/lib/fonts.js";
import Logo from "@/app/components/Logo";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="fixed z-10 top-0 left-0 w-full flex gap-1 sm:gap-4 md:gap-8 items-center justify-center font-serif bg-mediumGrayBackgroundColor h-28 px-2">
      <Link
        className={
          pathname === "/"
            ? `decoration-primaryColor ${workFontClass} font-sans font-medium underline underline-offset-8 decoration-2 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primaryColor tracking-tight`
            : `${workFontClass} font-sans font-medium hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primaryColor tracking-tight`
        }
        href={"/"}
      >
        Home page
      </Link>
      <Logo />
      <Link
        className={
          pathname === "/breweries"
            ? `decoration-primaryColor ${workFontClass} font-sans font-medium underline underline-offset-8 decoration-2 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primaryColor tracking-tight`
            : `${workFontClass} font-sans font-medium hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primaryColor tracking-tight`
        }
        href={"/breweries"}
      >
        All breweries
      </Link>
    </header>
  );
}

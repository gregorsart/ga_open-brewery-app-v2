import Link from "next/link";
import { workFontClass } from "@/lib/fonts.js";
import Logo from "@/app/components/Logo";
export default function Navbar() {
  return (
    <header className="w-full flex gap-1 sm:gap-4 md:gap-8 items-center justify-center font-serif bg-mediumGrayBackgroundColor h-28 px-2">
      <Link
        className={`${workFontClass} font-sans font-medium hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primaryColor tracking-tight`}
        href={"/"}
      >
        Home page
      </Link>
      <Logo />
      <Link
        className={`${workFontClass} font-sans font-medium hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primaryColor tracking-tight`}
        href={"/breweries"}
      >
        All breweries
      </Link>
    </header>
  );
}

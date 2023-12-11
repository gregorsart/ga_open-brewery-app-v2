import Image from "next/image";
import Link from "next/link";
import { workFontClass } from "@/lib/fonts.js";

export default function Footer() {
  return (
    <footer className="flex h-16 w-full items-center justify-between  bg-mediumGrayBackgroundColor px-20 sm:px-44 md:px-40 lg:px-36 xl:px-52">
      <Link
        className="p-2"
        href="https://gregorsart.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/gregorsart-logo.png"
          alt="gregorsart logo"
          width={28}
          height={28}
          priority
        />
      </Link>
      <p className={`${workFontClass} font-sans text-sm`}>
        V2 — Copryright gregorsart 2023
      </p>
    </footer>
  );
}

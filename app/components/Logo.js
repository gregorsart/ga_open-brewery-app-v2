import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="./">
      <Image
        className="h-24
        w-auto"
        src="/open-brewery-app-logo.svg"
        alt="Logo of the brewery app"
        width={878}
        height={547}
        blurDataURL="data:..."
        placeholder="blur" // Optional blur-up while loading
      />
    </Link>
  );
}

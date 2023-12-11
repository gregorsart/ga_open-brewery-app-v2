import Image from "next/image";
import { workFontClass } from "@/lib/fonts.js";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        className="h-20 animate-bounce
        w-auto"
        src="/spinning-icon.svg"
        alt="Icon of a beer barrel"
        width={50}
        height={50}
        blurDataURL="data:..."
        placeholder="blur" // Optional blur-up while loading
      />
      <p className={`${workFontClass} font-sans`}>loading data</p>
    </div>
  );
}

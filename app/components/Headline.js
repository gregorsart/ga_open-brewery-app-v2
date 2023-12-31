import { bitterFontClass } from "@/lib/fonts.js";

export default function Headline({ children, $marginY }) {
  return (
    <h1
      className={
        $marginY
          ? `my-12 ${bitterFontClass} mx-auto font-serif text-3xl text-mediumBrownBackgroundColor font-black max-w-[15ch] text-center`
          : `my-auto ${bitterFontClass} mx-auto font-serif text-3xl text-mediumBrownBackgroundColor font-black max-w-[15ch] text-center`
      }
    >
      {children}
    </h1>
  );
}

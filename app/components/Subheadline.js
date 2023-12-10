import { bitterFontClass } from "@/lib/fonts.js";

export default function Subheadline({ children }) {
  return (
    <h2
      className={`${bitterFontClass} mx-auto font-serif mb-3 text-xl text-primaryColor font-normal max-w-[20ch] text-center`}
    >
      {children}
    </h2>
  );
}

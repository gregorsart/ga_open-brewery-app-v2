import { Work_Sans } from "next/font/google";
import { Bitter } from "next/font/google";

const workFont = Work_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-work",
});

export const workFontClass = workFont.variable;

const bitterFont = Bitter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-bitter",
});

export const bitterFontClass = bitterFont.variable;

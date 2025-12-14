import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";

export const kanit = Kanit({
  subsets: ['latin'], 
  weight: ["400", "700", "900"],
  style: ["normal"],
 preload: true,
});
export const mulish = Mulish({
  subsets: ["latin"],
weight: ["300", "700"],
  style: ["normal"],
 preload: true,
});
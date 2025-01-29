import {
  Inter,
  Lusitana,
  Geist,
  Geist_Mono,
  Montserrat,
  Outfit,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const outfit = Outfit({ weight: ["400", "700"], subsets: ["latin"] });

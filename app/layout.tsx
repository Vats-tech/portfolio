import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import LeftPanel from "./components/left-panel";
import Connect from "./components/connect";
import { geistMono, geistSans } from "./components/fonts";

export const metadata: Metadata = {
  title: "Portfolio - Saurabh Vats",
  description: "Saurabh Vats Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="max-w-[1180px] pt-20 sm:pt-40 m-auto lg:block">
          <div className="mx-0 sm:mx-5 p-4 md:pd-6 lg:mx-0 flex items-start place-content-center gap-[8%] lg:flex-row flex-col">
            <LeftPanel />
            <div className="mt-8 lg:mt-0 w-full lg:w-[60%] text-center lg:text-start flex-1 whitespace-pre-wrap break-words overflow-aut">
              {children}
              <Connect styles="mt-8 lg:mt-0" />
            </div>
          </div>
        </div>
        <footer className="mt-5"></footer>
      </body>
    </html>
  );
}

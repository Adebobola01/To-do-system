import type { Metadata } from "next";
// import { Provider } from "@/components/ui/provider";
// import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/ui/sidebar";
import "./globals.css";
import HeaderSearchInput from "@/components/ui/headerSearch";
import HeaderIcons from "@/components/ui/headerIcons";
import HeaderTexts from "@/components/ui/headerTexts";
import HeaderProfile from "@/components/ui/headerProfile";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Todo App",
  description: "A TODO system app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`grid grid-cols-[14rem_auto] grid-rows-[5rem_auto]`}>
        <Sidebar />
        <header className="h-[5rem] grow-1 bg-white row-start-1 row-end-2 col-start-2 col-end-3 border-1 border-[#CDD6E9] px-[2.8rem] py-[1.2rem] flex justify-between outline-0">
          <HeaderSearchInput />
          <HeaderIcons />
          <HeaderTexts />
          <HeaderProfile />
        </header>
        <main className="row-start-2 row-end-3 col-start-2 col-end-3 mt-[1.7rem] mx-[3rem] bg-white rounded-xl ">
          {children}
        </main>
      </body>
    </html>
  );
}

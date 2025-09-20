import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/ui/sidebar";
import "./globals.css";

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
      <body className={`grid grid-cols-[250px_auto] grid-rows-[auto_full]`}>
        <Sidebar />
        <header className="w-full h-[90px] bg-white row-start-1 row-end-2 col-start-2 col-end-3 border-1 border-[#CDD6E9] "></header>
        <main className="row-start-2 row-end-3 col-start-2 col-end-3 mt-10 ">
          {children}
        </main>
      </body>
    </html>
  );
}

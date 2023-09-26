import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProvider from "./provider";
import UtilityMenu from "../components/common/UtilityMenu";
import GlobalMenu from "../components/common/GlobalMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "グローバルチェッカー",
  description: "各国の通貨情報を確認できます",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col justify-between mb-2">
            <UtilityMenu />
            <GlobalMenu />
          </div>
          <div className="mx-auto px-4">{children}</div>
        </body>
      </html>
    </AppProvider>
  );
}

import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import AppProvider from "./provider";
import UtilityMenu from "../components/common/UtilityMenu";
import GlobalMenu from "../components/common/GlobalMenu";

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
 });

export const metadata: Metadata = {
  title: "グローバルチェッカー",
  description: "各国の通貨情報を確認できます",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={noto.className}>
        <AppProvider>
          <div className="flex flex-col justify-between mb-2">
            <UtilityMenu />
            <GlobalMenu />
          </div>
          <div className="mx-auto px-4">{children}</div>
        </AppProvider>
      </body>
    </html>
  );
}

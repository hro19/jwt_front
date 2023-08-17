import './globals.css'
import type { Metadata } from 'next'
import Link from "next/link";
import { Inter } from 'next/font/google'
import AppProvider from "./provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'グローバルチェッカー',
  description: '各国の通貨情報を確認できます',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col justify-between mb-2">
            <div className="flex justify-end space-x-2 my-1">
              <a href="/login" className="rounded-full border p-1 bg-lime-300">
                <h2 className="text-center">login</h2>
              </a>
              <a href="/register" className="rounded-full border p-1 bg-lime-300">
                <h2 className="text-center">register</h2>
              </a>
            </div>
            <div className="grid gap-1 text-center max-w-5xl w-full mb-0 mx-auto grid-cols-5 text-base lg:text-2xl">
              <Link href="/">
                <h2 className={`mb-3 font-semibold text-center bg-slate-200`}>home</h2>
              </Link>
              <Link href="/admin">
                <h2 className={`mb-3 font-semibold text-center bg-slate-200`}>admin</h2>
              </Link>
              <Link href="/mypage">
                <h2 className={`mb-3 font-semibold text-center bg-slate-200`}>mypage</h2>
              </Link>
              <Link href="/currency/php">
                <h2 className={`mb-3 font-semibold text-center bg-slate-200`}>
                  Currency_php
                </h2>
              </Link>
              <a href="/currency/jay">
                <h2 className={`mb-3 font-semibold text-center bg-slate-200`}>
                  Currency_jay
                </h2>
              </a>
            </div>
          </div>
          <div className="mx-auto px-4">{children}</div>
        </body>
      </html>
    </AppProvider>
  );
}

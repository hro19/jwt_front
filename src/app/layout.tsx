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
            <div className="flex justify-end space-x-2 my-1 mr-2">
              <Link
                href="/logout"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                <h2 className="text-center">ログアウト</h2>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                <h2 className="text-center">ログイン</h2>
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                <h2 className="text-center">新規登録</h2>
              </Link>
            </div>
            <div className="bg-slate-200 py-2 mb-3">
              <div className="grid gap-1 text-center max-w-5xl w-full mx-auto grid-cols-5 text-base lg:text-xl">
                <Link href="/">
                  <h2 className={`font-semibold text-center`}>home</h2>
                </Link>
                <Link href="/admin">
                  <h2 className={`font-semibold text-center`}>admin</h2>
                </Link>
                <Link href="/mypage">
                  <h2 className={`font-semibold text-center`}>mypage</h2>
                </Link>
                <Link href="/currency/php">
                  <h2 className={`font-semibold text-center`}>Currency_php</h2>
                </Link>
                <Link href="/currency/jay">
                  <h2 className={`font-semibold text-center`}>Currency_jay</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto px-4">{children}</div>
        </body>
      </html>
    </AppProvider>
  );
}

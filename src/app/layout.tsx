import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppProvider from "./provider";
import GlobalMenu from '@/components/common/GlobalMenu';
import UtilityMenu from '@/components/common/UtilityMenu';

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
            <GlobalMenu />
            <UtilityMenu />
          </div>
          <div className="mx-auto px-4">{children}</div>
        </body>
      </html>
    </AppProvider>
  );
}

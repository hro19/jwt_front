import type { Metadata } from "next";
import AdminMenu from "@/components/common/AdminMenu";

export const metadata: Metadata = {
  title: "グローバルチェッカー",
  description: "各国の通貨情報を確認できます",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <>
      <AdminMenu />
      {children}
    </>
  );
}

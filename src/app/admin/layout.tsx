import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "グローバルチェッカー",
  description: "各国の通貨情報を確認できます",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div className="grid gap-2 text-center grid-cols-2 text-base lg:text-2xl">
          <a href="/admin/users">
            <h2 className={`mb-3 px-3 font-semibold text-center bg-slate-400`}>
              ユーザーALL情報
            </h2>
          </a>
          <a href="/admin/tasks">
            <h2 className={`mb-3 font-semibold text-center bg-slate-400`}>
              タスクALL情報
            </h2>
          </a>
        </div>
      </div>
      {children}
    </>
  );
}

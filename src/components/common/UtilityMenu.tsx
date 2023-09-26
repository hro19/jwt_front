import React from "react";
import Link from "next/link";

const uMenus = [
  {
    href: "/",
    text: "ホーム",
  },
  {
    href: "/admin",
    text: "管理者用",
  },
  {
    href: "/mypage",
    text: "マイページ",
  },
  {
    href: "/currency/php",
    text: "Ph通貨",
  },
  {
    href: "/currency/jay",
    text: "通貨計算",
  },
];

const UtilityMenu = () => {
  return (
    <div className="bg-slate-200 py-2 mb-3">
      <div className="grid gap-1 text-center max-w-5xl w-full mx-auto grid-cols-5 text-base lg:text-xl">
        {uMenus.map((menu, index) => (
          <Link key={index} href={menu.href} className={`font-semibold text-center`}>
            {menu.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UtilityMenu;
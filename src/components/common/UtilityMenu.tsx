import React from "react";
import Link from "next/link";

const uMenus = [
  {
    href: "/logout",
    text: "ログアウト",
  },
  {
    href: "/login",
    text: "ログイン",
  },
  {
    href: "/register",
    text: "新規登録",
  },
];

const UtilityMenu = () => {
  return (
    <div className="flex justify-end space-x-2 my-2 mr-2">
      {uMenus.map((menu, index) => (
        <Link
          key={index}
          href={menu.href}
          className="inline-flex items-center justify-center px-4 py-1 text-sm font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          <h2 className="text-center">{menu.text}</h2>
        </Link>
      ))}
    </div>
  );
};

export default UtilityMenu;

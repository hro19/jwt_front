import Link from "next/link";

const gMenus = [
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

const GlobalMenu = () => {
  return (
    <div className="flex justify-end space-x-2 my-1 mr-2">
      {gMenus.map((gmenu, index) => (
        <Link key={index} href={gmenu.href} className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            <h2 className="text-center">{gmenu.text}</h2>
        </Link>
      ))}
    </div>
  );
};

export default GlobalMenu;
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@chakra-ui/react";

const AdminMenu = () => {
      const pathname = usePathname();

      const adminSubmenus = [
        {
          href: "/admin/users",
          text: "ユーザーALL情報",
          bg_color: "bg-green-500",
          hover_bg_color: "hover:bg-green-300",
        },
        {
          href: "/admin/tasks",
          text: "タスクALL情報",
          bg_color: "bg-violet-700",
          hover_bg_color: "hover:bg-violet-500",
        },
      ];

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="grid gap-2 text-center grid-cols-2 text-base lg:text-2xl">
        {adminSubmenus.map((menu, index) => (
            <Button
              as="a"
              key={index}
              href={menu.href}
              mb={2}
              px={3}
              py={2}
              color={"white"}
              variant="solid"
              className={`${menu.bg_color} ${menu.hover_bg_color} ${
                pathname === menu.href ? "opacity-70 pointer-events-none" : ""
              }`}
            >
              {menu.text}
            </Button>
        ))}
      </div>
    </div>
  );
}

export default AdminMenu

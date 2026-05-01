"use client";

import {
  LayoutDashboard,
  ListOrdered,
  Package,
  Settings,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogoutSubmitButton } from "./SubmitButtons";

const items = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { title: "Pedidos", icon: ListOrdered, href: "/admin/orders" },
  { title: "Produtos", icon: Package, href: "/admin/products" },
  { title: "Categorias", icon: Tag, href: "/admin/categories" },
  { title: "Configurações", icon: Settings, href: "/admin/settings" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;

                const isActive =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href);

                return (
                  <SidebarMenuItem key={item.title}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium whitespace-nowrap transition
                        ${
                          isActive
                            ? "bg-stone-900 text-white hover:bg-stone-900"
                            : "text-stone-600 hover:bg-stone-300"
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <div className="flex flex-col gap-4 p-3">
        <p className="text-stone-400 font-semibold text-xs">emai@email.com</p>
        <LogoutSubmitButton />
      </div>
    </Sidebar>
  );
}

"use client";

import {
  Box,
  LayoutDashboard,
  Settings,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Resumo (Pedidos)", icon: LayoutDashboard, href: "/resume" },
  { title: "Gerenciar Cardápio", icon: UtensilsCrossed, href: "/menu" },
  { title: "Estoque & Insumos", icon: Box, href: "/inventory" },
  { title: "Clientes", icon: Users, href: "/customers" },
  { title: "Configurações", icon: Settings, href: "/settings" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.href} className="flex items-center gap-2">
                        <Icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

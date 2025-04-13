"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { TicketIcon } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Dashboard",
      active: pathname === "/",
    },
    {
      href: "/tickets",
      label: "Tickets",
      active: pathname === "/tickets" || pathname.startsWith("/tickets/"),
    },
    {
      href: "/users",
      label: "Usuarios",
      active: pathname === "/users",
    },
    {
      href: "/reports",
      label: "Reportes",
      active: pathname === "/reports",
    },
  ]

  return (
    <div className="mr-4 flex items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <TicketIcon className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Sistema de Tickets IT</span>
      </Link>
      <nav className="flex items-center space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

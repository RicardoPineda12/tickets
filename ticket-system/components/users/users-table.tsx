"use client"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UsersTable() {
  const users = [
    {
      id: "1",
      name: "Juan Pérez",
      email: "juan.perez@ejemplo.com",
      role: "Usuario",
      department: "Marketing",
      status: "Activo",
      avatar: "/placeholder.svg",
      initials: "JP",
      created: "2023-01-15T10:30:00",
    },
    {
      id: "2",
      name: "María López",
      email: "maria.lopez@ejemplo.com",
      role: "Usuario",
      department: "Finanzas",
      status: "Activo",
      avatar: "/placeholder.svg",
      initials: "ML",
      created: "2023-02-20T14:45:00",
    },
    {
      id: "3",
      name: "Carlos Ruiz",
      email: "carlos.ruiz@ejemplo.com",
      role: "Técnico",
      department: "IT",
      status: "Activo",
      avatar: "/placeholder.svg",
      initials: "CR",
      created: "2023-01-05T09:15:00",
    },
    {
      id: "4",
      name: "Ana Martínez",
      email: "ana.martinez@ejemplo.com",
      role: "Técnico",
      department: "IT",
      status: "Activo",
      avatar: "/placeholder.svg",
      initials: "AM",
      created: "2023-03-10T11:20:00",
    },
    {
      id: "5",
      name: "Miguel Ángel",
      email: "miguel.angel@ejemplo.com",
      role: "Administrador",
      department: "IT",
      status: "Activo",
      avatar: "/placeholder.svg",
      initials: "MA",
      created: "2022-12-01T08:00:00",
    },
    {
      id: "6",
      name: "Laura Pérez",
      email: "laura.perez@ejemplo.com",
      role: "Técnico",
      department: "IT",
      status: "Inactivo",
      avatar: "/placeholder.svg",
      initials: "LP",
      created: "2023-01-25T13:10:00",
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead>Departamento</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Fecha de registro</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.name}</span>
                </div>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.role === "Administrador" ? "default" : user.role === "Técnico" ? "secondary" : "outline"
                  }
                >
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>{user.department}</TableCell>
              <TableCell>
                <Badge
                  variant={user.status === "Activo" ? "outline" : "secondary"}
                  className={user.status === "Activo" ? "border-green-500 text-green-500" : ""}
                >
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell>{new Date(user.created).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Abrir menú</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                    <DropdownMenuItem>Editar usuario</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Cambiar rol</DropdownMenuItem>
                    <DropdownMenuItem>Restablecer contraseña</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      {user.status === "Activo" ? "Desactivar usuario" : "Activar usuario"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

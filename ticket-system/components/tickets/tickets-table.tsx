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
import Link from "next/link"

export function TicketsTable() {
  const tickets = [
    {
      id: "TICKET-1234",
      title: "Error en la impresora de la oficina principal",
      status: "En proceso",
      priority: "Media",
      category: "Hardware",
      assignee: {
        name: "Miguel Ángel",
        avatar: "/placeholder.svg",
        initials: "MA",
      },
      created: "2023-04-12T09:30:00",
      updated: "2023-04-12T14:30:00",
    },
    {
      id: "TICKET-1233",
      title: "No puedo acceder a mi correo electrónico",
      status: "Nuevo",
      priority: "Alta",
      category: "Software",
      assignee: {
        name: "Laura Pérez",
        avatar: "/placeholder.svg",
        initials: "LP",
      },
      created: "2023-04-12T08:45:00",
      updated: "2023-04-12T08:45:00",
    },
    {
      id: "TICKET-1232",
      title: "Solicitud de nuevo software para diseño",
      status: "Pendiente",
      priority: "Baja",
      category: "Software",
      assignee: {
        name: "Sin asignar",
        avatar: "",
        initials: "NA",
      },
      created: "2023-04-12T07:15:00",
      updated: "2023-04-12T10:20:00",
    },
    {
      id: "TICKET-1231",
      title: "Problema con la conexión VPN",
      status: "Resuelto",
      priority: "Alta",
      category: "Red",
      assignee: {
        name: "Carlos Ruiz",
        avatar: "/placeholder.svg",
        initials: "CR",
      },
      created: "2023-04-11T15:30:00",
      updated: "2023-04-12T09:45:00",
    },
    {
      id: "TICKET-1230",
      title: "Actualización de sistema operativo",
      status: "Cerrado",
      priority: "Media",
      category: "Software",
      assignee: {
        name: "Ana Martínez",
        avatar: "/placeholder.svg",
        initials: "AM",
      },
      created: "2023-04-10T11:20:00",
      updated: "2023-04-11T16:30:00",
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead className="w-[300px]">Título</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Prioridad</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Asignado a</TableHead>
            <TableHead>Creado</TableHead>
            <TableHead>Actualizado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell className="font-medium">
                <Link href={`/tickets/${ticket.id}`} className="hover:underline">
                  {ticket.id}
                </Link>
              </TableCell>
              <TableCell>{ticket.title}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    ticket.status === "Nuevo" || ticket.status === "En proceso"
                      ? "default"
                      : ticket.status === "Resuelto"
                        ? "outline"
                        : "secondary"
                  }
                >
                  {ticket.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    ticket.priority === "Alta"
                      ? "border-red-500 text-red-500"
                      : ticket.priority === "Media"
                        ? "border-yellow-500 text-yellow-500"
                        : "border-green-500 text-green-500"
                  }
                >
                  {ticket.priority}
                </Badge>
              </TableCell>
              <TableCell>{ticket.category}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={ticket.assignee.avatar || "/placeholder.svg"} alt={ticket.assignee.name} />
                    <AvatarFallback>{ticket.assignee.initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{ticket.assignee.name}</span>
                </div>
              </TableCell>
              <TableCell>{new Date(ticket.created).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(ticket.updated).toLocaleDateString()}</TableCell>
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
                    <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                    <DropdownMenuItem>Editar ticket</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Asignar ticket</DropdownMenuItem>
                    <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Cerrar ticket</DropdownMenuItem>
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

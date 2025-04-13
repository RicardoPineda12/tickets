import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentTickets() {
  const tickets = [
    {
      id: "TICKET-1234",
      title: "Error en la impresora de la oficina principal",
      status: "En proceso",
      priority: "Media",
      assignee: {
        name: "Miguel Ángel",
        avatar: "/placeholder.svg",
        initials: "MA",
      },
      created: "Hace 2 horas",
    },
    {
      id: "TICKET-1233",
      title: "No puedo acceder a mi correo electrónico",
      status: "Nuevo",
      priority: "Alta",
      assignee: {
        name: "Laura Pérez",
        avatar: "/placeholder.svg",
        initials: "LP",
      },
      created: "Hace 3 horas",
    },
    {
      id: "TICKET-1232",
      title: "Solicitud de nuevo software para diseño",
      status: "Pendiente",
      priority: "Baja",
      assignee: {
        name: "Sin asignar",
        avatar: "",
        initials: "NA",
      },
      created: "Hace 5 horas",
    },
    {
      id: "TICKET-1231",
      title: "Problema con la conexión VPN",
      status: "Resuelto",
      priority: "Alta",
      assignee: {
        name: "Carlos Ruiz",
        avatar: "/placeholder.svg",
        initials: "CR",
      },
      created: "Hace 1 día",
    },
    {
      id: "TICKET-1230",
      title: "Actualización de sistema operativo",
      status: "Cerrado",
      priority: "Media",
      assignee: {
        name: "Ana Martínez",
        avatar: "/placeholder.svg",
        initials: "AM",
      },
      created: "Hace 2 días",
    },
  ]

  return (
    <div className="space-y-8">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={ticket.assignee.avatar || "/placeholder.svg"} alt={ticket.assignee.name} />
            <AvatarFallback>{ticket.assignee.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{ticket.title}</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">{ticket.id}</span>
              <span className="mx-2 text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{ticket.created}</span>
            </div>
          </div>
          <div className="ml-auto flex flex-col items-end gap-1">
            <Badge
              variant={
                ticket.status === "Nuevo" || ticket.status === "En proceso"
                  ? "default"
                  : ticket.status === "Resuelto"
                    ? "outline"
                    : "secondary"
              }
              className="ml-auto"
            >
              {ticket.status}
            </Badge>
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
          </div>
        </div>
      ))}
    </div>
  )
}

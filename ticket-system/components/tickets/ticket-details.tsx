import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pencil, UserPlus } from "lucide-react"

interface TicketDetailsProps {
  id: string
}

export function TicketDetails({ id }: TicketDetailsProps) {
  // Datos de ejemplo - en una aplicación real, estos datos vendrían de una base de datos
  const ticket = {
    id: id,
    title: "Error en la impresora de la oficina principal",
    description:
      "La impresora HP LaserJet de la oficina principal no imprime documentos PDF. Muestra un error de 'Trabajo cancelado' cada vez que intento imprimir. Ya he reiniciado la impresora y verificado que tiene papel y tóner suficiente. El problema persiste desde ayer por la tarde.",
    status: "En proceso",
    priority: "Media",
    category: "Hardware",
    assignee: {
      name: "Miguel Ángel",
      avatar: "/placeholder.svg",
      initials: "MA",
    },
    reporter: {
      name: "Juan Pérez",
      avatar: "/placeholder.svg",
      initials: "JP",
    },
    created: "2023-04-12T09:30:00",
    updated: "2023-04-12T14:30:00",
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="text-2xl">{ticket.title}</CardTitle>
          <CardDescription className="mt-2 flex flex-wrap gap-2">
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
            <Badge variant="outline">{ticket.category}</Badge>
          </CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Pencil className="mr-2 h-4 w-4" />
          Editar
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Descripción</h3>
          <p className="text-sm">{ticket.description}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Reportado por</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={ticket.reporter.avatar || "/placeholder.svg"} alt={ticket.reporter.name} />
                <AvatarFallback>{ticket.reporter.initials}</AvatarFallback>
              </Avatar>
              <span className="text-sm">{ticket.reporter.name}</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Asignado a</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={ticket.assignee.avatar || "/placeholder.svg"} alt={ticket.assignee.name} />
                <AvatarFallback>{ticket.assignee.initials}</AvatarFallback>
              </Avatar>
              <span className="text-sm">{ticket.assignee.name}</span>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <UserPlus className="h-3 w-3" />
                <span className="sr-only">Cambiar asignación</span>
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Creado</h3>
            <p className="text-sm">{new Date(ticket.created).toLocaleString()}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Actualizado</h3>
            <p className="text-sm">{new Date(ticket.updated).toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Resolver Ticket</Button>
        <Button variant="destructive">Cerrar Ticket</Button>
      </CardFooter>
    </Card>
  )
}

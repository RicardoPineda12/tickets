import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

interface TicketActivityProps {
  id: string
}

export function TicketActivity({ id }: TicketActivityProps) {
  // Datos de ejemplo - en una aplicación real, estos datos vendrían de una base de datos
  const activities = [
    {
      id: "1",
      type: "status_change",
      user: {
        name: "Miguel Ángel",
        avatar: "/placeholder.svg",
        initials: "MA",
      },
      oldValue: "Nuevo",
      newValue: "En proceso",
      timestamp: "2023-04-12T09:45:00",
    },
    {
      id: "2",
      type: "assignment",
      user: {
        name: "Ana Martínez",
        avatar: "/placeholder.svg",
        initials: "AM",
      },
      oldValue: "Sin asignar",
      newValue: "Miguel Ángel",
      timestamp: "2023-04-12T09:50:00",
    },
    {
      id: "3",
      type: "comment",
      user: {
        name: "Miguel Ángel",
        avatar: "/placeholder.svg",
        initials: "MA",
      },
      timestamp: "2023-04-12T10:15:00",
    },
    {
      id: "4",
      type: "comment",
      user: {
        name: "Juan Pérez",
        avatar: "/placeholder.svg",
        initials: "JP",
      },
      timestamp: "2023-04-12T10:30:00",
    },
    {
      id: "5",
      type: "attachment",
      user: {
        name: "Miguel Ángel",
        avatar: "/placeholder.svg",
        initials: "MA",
      },
      newValue: "instrucciones_impresora.pdf",
      timestamp: "2023-04-12T11:00:00",
    },
    {
      id: "6",
      type: "comment",
      user: {
        name: "Miguel Ángel",
        avatar: "/placeholder.svg",
        initials: "MA",
      },
      timestamp: "2023-04-12T11:00:00",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad</CardTitle>
        <CardDescription className="flex justify-between items-center">
          <span>Historial de actividad del ticket</span>
          <Button variant="ghost" size="icon" title="Activar notificaciones">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Activar notificaciones</span>
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-2">
              <Avatar className="mt-0.5 h-6 w-6">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-1 text-sm">
                  <span className="font-medium">{activity.user.name}</span>
                  {activity.type === "status_change" && (
                    <>
                      <span>cambió el estado de</span>
                      <Badge variant="outline">{activity.oldValue}</Badge>
                      <span>a</span>
                      <Badge
                        variant={
                          activity.newValue === "En proceso"
                            ? "default"
                            : activity.newValue === "Resuelto"
                              ? "outline"
                              : "secondary"
                        }
                      >
                        {activity.newValue}
                      </Badge>
                    </>
                  )}
                  {activity.type === "assignment" && (
                    <>
                      <span>asignó el ticket de</span>
                      <span className="font-medium">{activity.oldValue}</span>
                      <span>a</span>
                      <span className="font-medium">{activity.newValue}</span>
                    </>
                  )}
                  {activity.type === "comment" && <span>agregó un comentario</span>}
                  {activity.type === "attachment" && (
                    <>
                      <span>adjuntó</span>
                      <span className="font-medium">{activity.newValue}</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{new Date(activity.timestamp).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

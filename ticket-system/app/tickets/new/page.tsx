import { NewTicketForm } from "@/components/tickets/new-ticket-form"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function NewTicketPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/tickets">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Crear Nuevo Ticket</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="md:col-span-2 lg:col-span-5">
          <NewTicketForm />
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Información</h3>
            <div className="space-y-4 text-sm">
              <p>
                Complete todos los campos requeridos para crear un nuevo ticket. Los campos marcados con * son
                obligatorios.
              </p>
              <p>
                Proporcione la mayor cantidad de detalles posible para ayudar al equipo de soporte a resolver su
                problema de manera eficiente.
              </p>
              <p>Puede adjuntar archivos como capturas de pantalla o logs que ayuden a diagnosticar el problema.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { TicketDetails } from "@/components/tickets/ticket-details"
import { TicketComments } from "@/components/tickets/ticket-comments"
import { TicketActivity } from "@/components/tickets/ticket-activity"

export default function TicketPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/tickets">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Ticket {params.id}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <TicketDetails id={params.id} />
          <TicketComments id={params.id} />
        </div>
        <div>
          <TicketActivity id={params.id} />
        </div>
      </div>
    </div>
  )
}

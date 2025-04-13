import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { TicketsTable } from "@/components/tickets/tickets-table"
import { TicketsFilter } from "@/components/tickets/tickets-filter"

export default function TicketsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
        <Button asChild>
          <Link href="/tickets/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuevo Ticket
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        <TicketsFilter />
        <TicketsTable />
      </div>
    </div>
  )
}

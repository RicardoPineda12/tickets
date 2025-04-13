import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { UsersTable } from "@/components/users/users-table"
import { UsersFilter } from "@/components/users/users-filter"

export default function UsersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Usuarios</h2>
        <Button asChild>
          <Link href="/users/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nuevo Usuario
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        <UsersFilter />
        <UsersTable />
      </div>
    </div>
  )
}

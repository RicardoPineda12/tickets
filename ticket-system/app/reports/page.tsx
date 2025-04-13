import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TicketsByCategory } from "@/components/reports/tickets-by-category"
import { ResponseTimeReport } from "@/components/reports/response-time-report"
import { SatisfactionReport } from "@/components/reports/satisfaction-report"
import { ReportsDatePicker } from "@/components/reports/reports-date-picker"

export default function ReportsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h2 className="text-3xl font-bold tracking-tight">Reportes</h2>
        <ReportsDatePicker />
      </div>
      <Tabs defaultValue="tickets" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="performance">Rendimiento</TabsTrigger>
          <TabsTrigger value="satisfaction">Satisfacción</TabsTrigger>
        </TabsList>
        <TabsContent value="tickets" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total de Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">+12% respecto al periodo anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tickets Resueltos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">189</div>
                <p className="text-xs text-muted-foreground">77% del total de tickets</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tiempo Promedio de Resolución</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.5h</div>
                <p className="text-xs text-muted-foreground">-15% respecto al periodo anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tickets por Técnico</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.3</div>
                <p className="text-xs text-muted-foreground">Promedio por técnico</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Tickets por Categoría</CardTitle>
                <CardDescription>Distribución de tickets por categoría</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <TicketsByCategory />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Tickets por Estado</CardTitle>
                <CardDescription>Distribución de tickets por estado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  Gráfico de distribución por estado
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Tiempo de Respuesta</CardTitle>
                <CardDescription>Tiempo promedio de respuesta por categoría</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponseTimeReport />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Rendimiento por Técnico</CardTitle>
                <CardDescription>Tickets resueltos por técnico</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  Gráfico de rendimiento por técnico
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="satisfaction" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Satisfacción del Usuario</CardTitle>
                <CardDescription>Basado en encuestas de satisfacción</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <SatisfactionReport />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Comentarios de Usuarios</CardTitle>
                <CardDescription>Últimos comentarios de las encuestas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span className="ml-2 text-sm font-medium">Juan Pérez</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Buen servicio, pero tardaron un poco más de lo esperado en resolver mi problema."
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="ml-2 text-sm font-medium">María López</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Excelente atención y resolución rápida. El técnico fue muy amable."
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★☆☆</span>
                      <span className="ml-2 text-sm font-medium">Carlos Ruiz</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "La solución funcionó, pero tuve que esperar mucho tiempo para que atendieran mi ticket."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

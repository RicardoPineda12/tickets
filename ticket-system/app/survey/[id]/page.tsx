import { SatisfactionSurvey } from "@/components/survey/satisfaction-survey"

export default function SurveyPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center py-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Encuesta de Satisfacción</h1>
          <p className="text-muted-foreground">Su opinión es importante para mejorar nuestro servicio</p>
        </div>
        <SatisfactionSurvey ticketId={params.id} />
      </div>
    </div>
  )
}

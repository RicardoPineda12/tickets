"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { StarRating } from "@/components/survey/star-rating"

const formSchema = z.object({
  rating: z
    .number()
    .min(1, {
      message: "Por favor seleccione una calificación.",
    })
    .max(5),
  comment: z.string().optional(),
})

interface SatisfactionSurveyProps {
  ticketId: string
}

export function SatisfactionSurvey({ ticketId }: SatisfactionSurveyProps) {
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      comment: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Encuesta enviada",
      description: "Gracias por su retroalimentación.",
    })
    console.log(values)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-medium">¡Gracias por su retroalimentación!</h3>
          <p className="text-sm text-muted-foreground">Su opinión nos ayuda a mejorar nuestro servicio.</p>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Ticket #{ticketId}</h3>
          <p className="text-sm text-muted-foreground">
            Por favor, califique su experiencia con el servicio de soporte técnico.
          </p>
        </div>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>¿Cómo calificaría nuestro servicio?</FormLabel>
                  <FormControl>
                    <StarRating value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comentarios adicionales (opcional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Comparta sus comentarios o sugerencias..."
                      className="min-h-32 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Sus comentarios nos ayudan a mejorar nuestro servicio.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Enviar encuesta
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}

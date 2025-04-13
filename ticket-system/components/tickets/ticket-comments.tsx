"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUploader } from "@/components/tickets/file-uploader"
import { Paperclip, Send } from "lucide-react"

interface TicketCommentsProps {
  id: string
}

export function TicketComments({ id }: TicketCommentsProps) {
  const [comment, setComment] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [showFileUploader, setShowFileUploader] = useState(false)

  // Datos de ejemplo - en una aplicación real, estos datos vendrían de una base de datos
  const comments = [
    {
      id: "1",
      author: {
        name: "Miguel Ángel",
        avatar: "/placeholder.svg",
        initials: "MA",
        role: "Técnico",
      },
      content: "He revisado la impresora y parece ser un problema con el controlador. Voy a intentar reinstalarlo.",
      attachments: [],
      timestamp: "2023-04-12T10:15:00",
    },
    {
      id: "2",
      author: {
        name: "Juan Pérez",
        avatar: "/placeholder.svg",
        initials: "JP",
        role: "Usuario",
      },
      content: "Gracias por la rápida respuesta. ¿Hay algo que pueda hacer mientras tanto?",
      attachments: [],
      timestamp: "2023-04-12T10:30:00",
    },
    {
      id: "3",
      author: {
        name: "Miguel Ángel",
        avatar: "/placeholder.svg",
        initials: "MA",
        role: "Técnico",
      },
      content:
        "Puede intentar imprimir a través de otra impresora de la red mientras resolvemos este problema. La impresora del departamento de marketing está disponible para todos los usuarios.",
      attachments: [
        {
          name: "instrucciones_impresora.pdf",
          size: "1.2 MB",
        },
      ],
      timestamp: "2023-04-12T11:00:00",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      // Aquí iría la lógica para enviar el comentario
      console.log("Comentario enviado:", comment, "Archivos:", files)
      setComment("")
      setFiles([])
      setShowFileUploader(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comentarios</CardTitle>
        <CardDescription>Historial de comunicación sobre este ticket</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-2">
            <div className="flex items-start gap-2">
              <Avatar className="mt-1 h-8 w-8">
                <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                <AvatarFallback>{comment.author.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-xs text-muted-foreground">{comment.author.role}</span>
                  <span className="text-xs text-muted-foreground">{new Date(comment.timestamp).toLocaleString()}</span>
                </div>
                <p className="text-sm">{comment.content}</p>
                {comment.attachments.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {comment.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center gap-2 rounded-md border p-2 text-sm">
                        <Paperclip className="h-4 w-4 text-muted-foreground" />
                        <span>{attachment.name}</span>
                        <span className="text-xs text-muted-foreground">({attachment.size})</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex flex-col space-y-2">
            <Textarea
              placeholder="Escriba su comentario..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-20"
            />
            {showFileUploader && <FileUploader value={files} onChange={setFiles} />}
          </div>
          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => setShowFileUploader(!showFileUploader)}>
              <Paperclip className="mr-2 h-4 w-4" />
              {showFileUploader ? "Ocultar adjuntos" : "Adjuntar archivos"}
            </Button>
            <Button type="submit">
              <Send className="mr-2 h-4 w-4" />
              Enviar comentario
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  )
}

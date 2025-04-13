"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileIcon, X } from "lucide-react"

interface FileUploaderProps {
  value: any[]
  onChange: (files: any[]) => void
}

export function FileUploader({ value = [], onChange }: FileUploaderProps) {
  const [files, setFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      const updatedFiles = [...files, ...newFiles].slice(0, 5) // Limit to 5 files
      setFiles(updatedFiles)
      onChange(updatedFiles)
    }
  }

  const removeFile = (index: number) => {
    const updatedFiles = [...files]
    updatedFiles.splice(index, 1)
    setFiles(updatedFiles)
    onChange(updatedFiles)
  }

  return (
    <div className="space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <Input
          id="files"
          type="file"
          multiple
          className="cursor-pointer"
          onChange={handleFileChange}
          accept="image/*,.pdf,.doc,.docx,.txt,.log"
          disabled={files.length >= 5}
        />
      </div>
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between rounded-md border p-2">
              <div className="flex items-center space-x-2">
                <FileIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{file.name}</span>
                <span className="text-xs text-muted-foreground">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => removeFile(index)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Eliminar archivo</span>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

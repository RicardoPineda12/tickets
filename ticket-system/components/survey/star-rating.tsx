"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  value: number
  onChange: (value: number) => void
  count?: number
}

export function StarRating({ value, onChange, count = 5 }: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  return (
    <div className="flex space-x-1">
      {[...Array(count)].map((_, i) => {
        const ratingValue = i + 1
        return (
          <button
            type="button"
            key={i}
            className={cn(
              "rounded-md p-1 text-2xl focus:outline-none focus:ring-2 focus:ring-primary",
              (hoverValue !== null ? ratingValue <= hoverValue : ratingValue <= value)
                ? "text-yellow-500"
                : "text-gray-300",
            )}
            onClick={() => onChange(ratingValue)}
            onMouseEnter={() => setHoverValue(ratingValue)}
            onMouseLeave={() => setHoverValue(null)}
          >
            <Star className="h-8 w-8 fill-current" />
          </button>
        )
      })}
    </div>
  )
}

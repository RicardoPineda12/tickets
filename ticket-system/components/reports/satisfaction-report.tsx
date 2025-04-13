"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"

const data = [
  {
    name: "5 estrellas",
    value: 65,
    color: "#10b981",
  },
  {
    name: "4 estrellas",
    value: 25,
    color: "#a3e635",
  },
  {
    name: "3 estrellas",
    value: 7,
    color: "#f59e0b",
  },
  {
    name: "2 estrellas",
    value: 2,
    color: "#f97316",
  },
  {
    name: "1 estrella",
    value: 1,
    color: "#f43f5e",
  },
]

export function SatisfactionReport() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={100} />
          <Tooltip formatter={(value) => [`${value} respuestas`, ""]} />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

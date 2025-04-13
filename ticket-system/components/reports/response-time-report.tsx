"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Hardware",
    firstResponse: 1.2,
    resolution: 8.5,
  },
  {
    name: "Software",
    firstResponse: 0.8,
    resolution: 6.2,
  },
  {
    name: "Red",
    firstResponse: 0.5,
    resolution: 4.8,
  },
  {
    name: "Accesos",
    firstResponse: 0.3,
    resolution: 2.1,
  },
  {
    name: "Otros",
    firstResponse: 1.5,
    resolution: 12.3,
  },
]

export function ResponseTimeReport() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Horas", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => [`${value} horas`, ""]} />
          <Bar name="Primera respuesta" dataKey="firstResponse" fill="#0ea5e9" />
          <Bar name="Tiempo de resolución" dataKey="resolution" fill="#8b5cf6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

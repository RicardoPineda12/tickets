"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Hardware", value: 85, color: "#0ea5e9" },
  { name: "Software", value: 110, color: "#8b5cf6" },
  { name: "Red", value: 30, color: "#f43f5e" },
  { name: "Accesos", value: 15, color: "#10b981" },
  { name: "Otros", value: 5, color: "#f59e0b" },
]

export function TicketsByCategory() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} tickets`, name]} labelFormatter={() => ""} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

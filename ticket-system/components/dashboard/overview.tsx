"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Ene",
    total: 18,
  },
  {
    name: "Feb",
    total: 22,
  },
  {
    name: "Mar",
    total: 25,
  },
  {
    name: "Abr",
    total: 35,
  },
  {
    name: "May",
    total: 39,
  },
  {
    name: "Jun",
    total: 30,
  },
  {
    name: "Jul",
    total: 28,
  },
  {
    name: "Ago",
    total: 32,
  },
  {
    name: "Sep",
    total: 40,
  },
  {
    name: "Oct",
    total: 45,
  },
  {
    name: "Nov",
    total: 48,
  },
  {
    name: "Dic",
    total: 52,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

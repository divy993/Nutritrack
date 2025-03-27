"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Mon",
    Consumed: 1800,
    Burned: 400,
  },
  {
    name: "Tue",
    Consumed: 2200,
    Burned: 600,
  },
  {
    name: "Wed",
    Consumed: 1900,
    Burned: 500,
  },
  {
    name: "Thu",
    Consumed: 2100,
    Burned: 550,
  },
  {
    name: "Fri",
    Consumed: 2400,
    Burned: 700,
  },
  {
    name: "Sat",
    Consumed: 2600,
    Burned: 800,
  },
  {
    name: "Sun",
    Consumed: 1842,
    Burned: 468,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Consumed" fill="#22c55e" />
        <Bar dataKey="Burned" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  )
}


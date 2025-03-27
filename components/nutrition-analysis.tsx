"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent } from "@/components/ui/card"

const data = [
  { name: "Protein", value: 86, color: "#22c55e" },
  { name: "Carbs", value: 220, color: "#3b82f6" },
  { name: "Fat", value: 62, color: "#f59e0b" },
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function NutritionAnalysis() {
  return (
    <div className="space-y-4">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#22c55e] mr-2"></div>
            <span className="text-sm">Protein</span>
          </div>
          <span className="text-sm font-medium">86g</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#3b82f6] mr-2"></div>
            <span className="text-sm">Carbs</span>
          </div>
          <span className="text-sm font-medium">220g</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#f59e0b] mr-2"></div>
            <span className="text-sm">Fat</span>
          </div>
          <span className="text-sm font-medium">62g</span>
        </div>
      </div>

      <Card className="mt-4">
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Calories</span>
              <span className="text-sm font-medium">1,842 / 2,200</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Sodium</span>
              <span className="text-sm font-medium">1,240mg / 2,300mg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Sugar</span>
              <span className="text-sm font-medium">36g / 50g</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Fiber</span>
              <span className="text-sm font-medium">18g / 25g</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


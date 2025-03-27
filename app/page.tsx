import type { Metadata } from "next"
import DashboardPage from "@/components/dashboard-page"

export const metadata: Metadata = {
  title: "NutriTrack - Health & Fitness App",
  description: "Track your nutrition, calories, and fitness activities with AI-powered recommendations",
}

export default function Home() {
  return <DashboardPage />
}


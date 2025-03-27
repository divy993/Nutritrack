"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentActivities } from "@/components/recent-activities"
import { FoodLogger } from "@/components/food-logger"
import { ActivityTracker } from "@/components/activity-tracker"
import { Recommendations } from "@/components/recommendations"
import { NutritionAnalysis } from "@/components/nutrition-analysis"
import { UserStats } from "@/components/user-stats"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="food">Food & Nutrition</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <UserStats />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Calorie Overview</CardTitle>
                  <CardDescription>Your calorie intake and expenditure for the past week</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Your latest logged activities and meals</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivities />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="food" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Food Logger</CardTitle>
                  <CardDescription>Log your meals and track your nutrition</CardDescription>
                </CardHeader>
                <CardContent>
                  <FoodLogger />
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Today's Summary</CardTitle>
                  <CardDescription>Your nutritional intake for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <NutritionAnalysis />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="activity" className="space-y-4">
            <ActivityTracker />
          </TabsContent>
          <TabsContent value="recommendations" className="space-y-4">
            <Recommendations />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


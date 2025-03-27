"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Activity, Dumbbell, Heart, Timer, TrendingUp, User, Flame } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function ActivityTracker() {
  const [activeTab, setActiveTab] = useState("steps")
  const [intensity, setIntensity] = useState(50)
  const [workoutType, setWorkoutType] = useState("strength")
  const [duration, setDuration] = useState("30")

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Daily Activity</CardTitle>
          <CardDescription>Track your movement and exercise</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="steps">Steps</TabsTrigger>
              <TabsTrigger value="workouts">Workouts</TabsTrigger>
              <TabsTrigger value="heart">Heart</TabsTrigger>
            </TabsList>
            <TabsContent value="steps" className="space-y-4">
              <div className="flex flex-col items-center justify-center pt-4">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle
                      className="stroke-muted"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <circle
                      className="stroke-primary"
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={2 * Math.PI * 40 * (1 - 7842 / 10000)}
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">7,842</span>
                    <span className="text-sm text-muted-foreground">steps</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">Daily Goal: 10,000 steps</p>
                  <p className="text-sm text-muted-foreground">Distance: 5.2 km</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Activity className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Today</span>
                  </div>
                  <span className="text-sm">7,842 steps</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Activity className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Yesterday</span>
                  </div>
                  <span className="text-sm">9,234 steps</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Weekly Avg</span>
                  </div>
                  <span className="text-sm">8,921 steps</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="workouts" className="space-y-4">
              <div className="flex flex-col items-center justify-center pt-4">
                <div className="flex items-center justify-center h-40 w-40 rounded-full bg-primary/10">
                  <Dumbbell className="h-20 w-20 text-primary" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xl font-bold">3 workouts this week</p>
                  <p className="text-sm text-muted-foreground">Weekly Goal: 4 workouts</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Dumbbell className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Strength Training</span>
                  </div>
                  <span className="text-sm">Yesterday</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Activity className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Running</span>
                  </div>
                  <span className="text-sm">2 days ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Yoga</span>
                  </div>
                  <span className="text-sm">3 days ago</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="heart" className="space-y-4">
              <div className="flex flex-col items-center justify-center pt-4">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <Heart className="h-20 w-20 text-red-500 animate-pulse" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xl font-bold">72 BPM</p>
                  <p className="text-sm text-muted-foreground">Resting Heart Rate</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Heart className="mr-2 h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium">Average</span>
                  </div>
                  <span className="text-sm">72 BPM</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Active</span>
                  </div>
                  <span className="text-sm">125 BPM</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Timer className="mr-2 h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Recovery</span>
                  </div>
                  <span className="text-sm">Good</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Log Workout</CardTitle>
          <CardDescription>Record your exercise activity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="workout-type">Workout Type</Label>
            <Select value={workoutType} onValueChange={setWorkoutType}>
              <SelectTrigger id="workout-type">
                <SelectValue placeholder="Select workout type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="strength">Strength Training</SelectItem>
                <SelectItem value="cardio">Cardio</SelectItem>
                <SelectItem value="hiit">HIIT</SelectItem>
                <SelectItem value="yoga">Yoga</SelectItem>
                <SelectItem value="pilates">Pilates</SelectItem>
                <SelectItem value="running">Running</SelectItem>
                <SelectItem value="cycling">Cycling</SelectItem>
                <SelectItem value="swimming">Swimming</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input id="duration" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="intensity">Intensity</Label>
              <span className="text-sm text-muted-foreground">{intensity}%</span>
            </div>
            <Slider
              id="intensity"
              min={0}
              max={100}
              step={10}
              value={[intensity]}
              onValueChange={(value) => setIntensity(value[0])}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Light</span>
              <span>Moderate</span>
              <span>Intense</span>
            </div>
          </div>

          <Button className="w-full">Log Workout</Button>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Weekly Progress</CardTitle>
          <CardDescription>Your activity over the past week</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Steps</span>
              </div>
              <span className="text-sm">62,450 / 70,000</span>
            </div>
            <Progress value={89} className="h-2" />
            <p className="text-xs text-muted-foreground text-right">89% of weekly goal</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Workouts</span>
              </div>
              <span className="text-sm">3 / 4</span>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-muted-foreground text-right">75% of weekly goal</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Calories Burned</span>
              </div>
              <span className="text-sm">3,240 / 3,500</span>
            </div>
            <Progress value={93} className="h-2" />
            <p className="text-xs text-muted-foreground text-right">93% of weekly goal</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Active Minutes</span>
              </div>
              <span className="text-sm">185 / 150</span>
            </div>
            <Progress value={100} className="h-2" />
            <p className="text-xs text-muted-foreground text-right">Goal achieved!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Apple, Dumbbell, Flame, Heart, Salad, Utensils, Activity, User, TrendingUp } from "lucide-react"

export function Recommendations() {
  return (
    <Tabs defaultValue="diet">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="diet">Diet Recommendations</TabsTrigger>
        <TabsTrigger value="fitness">Fitness Recommendations</TabsTrigger>
      </TabsList>
      <TabsContent value="diet" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Balanced Macronutrients</CardTitle>
              <CardDescription>Based on your activity level and goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#22c55e] mr-2"></div>
                    <span className="text-sm">Protein</span>
                  </div>
                  <span className="text-sm font-medium">30%</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#3b82f6] mr-2"></div>
                    <span className="text-sm">Carbs</span>
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#f59e0b] mr-2"></div>
                    <span className="text-sm">Fat</span>
                  </div>
                  <span className="text-sm font-medium">25%</span>
                </div>
              </div>
              <div className="mt-4 flex h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="bg-[#22c55e] w-[30%]" />
                <div className="bg-[#3b82f6] w-[45%]" />
                <div className="bg-[#f59e0b] w-[25%]" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Utensils className="mr-2 h-4 w-4" />
                Adjust Macros
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Meal Suggestions</CardTitle>
              <CardDescription>Personalized for your nutrition goals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <Apple className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Breakfast</h4>
                </div>
                <p className="mt-1 text-sm">Greek yogurt with berries and nuts (320 kcal)</p>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <Salad className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Lunch</h4>
                </div>
                <p className="mt-1 text-sm">Grilled chicken salad with quinoa (450 kcal)</p>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Dinner</h4>
                </div>
                <p className="mt-1 text-sm">Baked salmon with roasted vegetables (520 kcal)</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Flame className="mr-2 h-4 w-4" />
                Get Meal Plan
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Nutrition Insights</CardTitle>
              <CardDescription>AI-powered analysis of your diet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Areas to Improve</h4>
                <ul className="ml-5 list-disc text-sm space-y-1">
                  <li>Increase protein intake by 15-20g daily</li>
                  <li>Reduce added sugar consumption</li>
                  <li>Add more fiber-rich vegetables</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Strengths</h4>
                <ul className="ml-5 list-disc text-sm space-y-1">
                  <li>Good hydration levels</li>
                  <li>Consistent meal timing</li>
                  <li>Adequate healthy fat intake</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Heart className="mr-2 h-4 w-4" />
                Full Analysis
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="fitness" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Workout Plan</CardTitle>
              <CardDescription>Personalized for your fitness level</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Monday</h4>
                </div>
                <p className="mt-1 text-sm">Upper Body Strength (45 min)</p>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Tuesday</h4>
                </div>
                <p className="mt-1 text-sm">Cardio & Core (30 min)</p>
              </div>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Thursday</h4>
                </div>
                <p className="mt-1 text-sm">Lower Body Strength (45 min)</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Dumbbell className="mr-2 h-4 w-4" />
                Full Workout Plan
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Activity Recommendations</CardTitle>
              <CardDescription>Based on your goals and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Recommended Activities</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Dumbbell className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Strength Training</p>
                      <p className="text-xs text-muted-foreground">3x per week</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">HIIT Cardio</p>
                      <p className="text-xs text-muted-foreground">2x per week</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Yoga/Stretching</p>
                      <p className="text-xs text-muted-foreground">2x per week</p>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Activity className="mr-2 h-4 w-4" />
                Customize Activities
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Fitness Insights</CardTitle>
              <CardDescription>AI-powered analysis of your activity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Areas to Improve</h4>
                <ul className="ml-5 list-disc text-sm space-y-1">
                  <li>Increase workout intensity gradually</li>
                  <li>Add more recovery days between strength sessions</li>
                  <li>Focus on proper form during exercises</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Strengths</h4>
                <ul className="ml-5 list-disc text-sm space-y-1">
                  <li>Consistent workout schedule</li>
                  <li>Good balance of cardio and strength</li>
                  <li>Steady progress in strength gains</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <TrendingUp className="mr-2 h-4 w-4" />
                Full Analysis
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}


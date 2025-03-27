import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Apple, Flame, Utensils } from "lucide-react"

export function UserStats() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Calories Consumed</CardTitle>
          <Utensils className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,842</div>
          <p className="text-xs text-muted-foreground">of 2,200 daily goal</p>
          <div className="mt-2 h-2 w-full rounded-full bg-muted">
            <div className="h-full w-[84%] rounded-full bg-primary" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
          <Flame className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">468</div>
          <p className="text-xs text-muted-foreground">of 500 daily goal</p>
          <div className="mt-2 h-2 w-full rounded-full bg-muted">
            <div className="h-full w-[94%] rounded-full bg-primary" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Protein</CardTitle>
          <Apple className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">86g</div>
          <p className="text-xs text-muted-foreground">of 120g daily goal</p>
          <div className="mt-2 h-2 w-full rounded-full bg-muted">
            <div className="h-full w-[72%] rounded-full bg-primary" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Steps</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7,842</div>
          <p className="text-xs text-muted-foreground">of 10,000 daily goal</p>
          <div className="mt-2 h-2 w-full rounded-full bg-muted">
            <div className="h-full w-[78%] rounded-full bg-primary" />
          </div>
        </CardContent>
      </Card>
    </>
  )
}


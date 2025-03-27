import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Activity, Apple, Dumbbell, Utensils } from "lucide-react"

export function RecentActivities() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9 bg-primary/10">
          <AvatarImage src="" alt="Activity" />
          <AvatarFallback className="bg-primary/10">
            <Utensils className="h-4 w-4 text-primary" />
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Breakfast</p>
          <p className="text-sm text-muted-foreground">Oatmeal with berries and nuts</p>
        </div>
        <div className="ml-auto font-medium">+420 kcal</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9 bg-primary/10">
          <AvatarImage src="" alt="Activity" />
          <AvatarFallback className="bg-primary/10">
            <Dumbbell className="h-4 w-4 text-primary" />
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Workout</p>
          <p className="text-sm text-muted-foreground">30 min strength training</p>
        </div>
        <div className="ml-auto font-medium">-250 kcal</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9 bg-primary/10">
          <AvatarImage src="" alt="Activity" />
          <AvatarFallback className="bg-primary/10">
            <Utensils className="h-4 w-4 text-primary" />
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Lunch</p>
          <p className="text-sm text-muted-foreground">Grilled chicken salad</p>
        </div>
        <div className="ml-auto font-medium">+520 kcal</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9 bg-primary/10">
          <AvatarImage src="" alt="Activity" />
          <AvatarFallback className="bg-primary/10">
            <Activity className="h-4 w-4 text-primary" />
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Walk</p>
          <p className="text-sm text-muted-foreground">45 min outdoor walk</p>
        </div>
        <div className="ml-auto font-medium">-180 kcal</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9 bg-primary/10">
          <AvatarImage src="" alt="Activity" />
          <AvatarFallback className="bg-primary/10">
            <Apple className="h-4 w-4 text-primary" />
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Snack</p>
          <p className="text-sm text-muted-foreground">Apple and protein bar</p>
        </div>
        <div className="ml-auto font-medium">+220 kcal</div>
      </div>
    </div>
  )
}


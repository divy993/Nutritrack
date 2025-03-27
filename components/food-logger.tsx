"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus } from "lucide-react"

// Mock food database that would normally come from an API
const foodDatabase = [
  { id: 1, name: "Apple", calories: 95, protein: 0.5, carbs: 25, fat: 0.3, serving: "1 medium" },
  { id: 2, name: "Banana", calories: 105, protein: 1.3, carbs: 27, fat: 0.4, serving: "1 medium" },
  { id: 3, name: "Chicken Breast", calories: 165, protein: 31, carbs: 0, fat: 3.6, serving: "100g" },
  { id: 4, name: "Salmon", calories: 206, protein: 22, carbs: 0, fat: 13, serving: "100g" },
  { id: 5, name: "Brown Rice", calories: 216, protein: 5, carbs: 45, fat: 1.8, serving: "1 cup cooked" },
  { id: 6, name: "Spinach", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, serving: "100g" },
  { id: 7, name: "Egg", calories: 78, protein: 6.3, carbs: 0.6, fat: 5.3, serving: "1 large" },
  { id: 8, name: "Greek Yogurt", calories: 100, protein: 17, carbs: 6, fat: 0.4, serving: "170g" },
]

export function FoodLogger() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMeal, setSelectedMeal] = useState("breakfast")
  const [customFood, setCustomFood] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    serving: "",
  })
  const [loggedFoods, setLoggedFoods] = useState([
    { id: 1, name: "Oatmeal", calories: 150, protein: 6, carbs: 27, fat: 2.5, serving: "1 cup", meal: "breakfast" },
    { id: 7, name: "Egg", calories: 78, protein: 6.3, carbs: 0.6, fat: 5.3, serving: "1 large", meal: "breakfast" },
  ])

  const filteredFoods = foodDatabase.filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleAddFood = (food) => {
    setLoggedFoods([...loggedFoods, { ...food, meal: selectedMeal }])
  }

  const handleAddCustomFood = () => {
    if (customFood.name && customFood.calories) {
      setLoggedFoods([
        ...loggedFoods,
        {
          id: Date.now(),
          ...customFood,
          calories: Number(customFood.calories),
          protein: Number(customFood.protein),
          carbs: Number(customFood.carbs),
          fat: Number(customFood.fat),
          meal: selectedMeal,
        },
      ])
      setCustomFood({
        name: "",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
        serving: "",
      })
    }
  }

  return (
    <Tabs defaultValue="search">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="search">Search Foods</TabsTrigger>
        <TabsTrigger value="custom">Add Custom Food</TabsTrigger>
      </TabsList>
      <TabsContent value="search" className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search foods..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedMeal} onValueChange={setSelectedMeal}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select meal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="breakfast">Breakfast</SelectItem>
              <SelectItem value="lunch">Lunch</SelectItem>
              <SelectItem value="dinner">Dinner</SelectItem>
              <SelectItem value="snack">Snack</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {filteredFoods.map((food) => (
            <Card key={food.id} className="p-0">
              <CardContent className="p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{food.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {food.calories} kcal | {food.serving}
                    </p>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => handleAddFood(food)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="custom">
        <Card>
          <CardHeader>
            <CardTitle>Add Custom Food</CardTitle>
            <CardDescription>Enter the nutritional information for your food</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 col-span-2">
                <Label htmlFor="name">Food Name</Label>
                <Input
                  id="name"
                  value={customFood.name}
                  onChange={(e) => setCustomFood({ ...customFood, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="calories">Calories</Label>
                <Input
                  id="calories"
                  type="number"
                  value={customFood.calories}
                  onChange={(e) => setCustomFood({ ...customFood, calories: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serving">Serving Size</Label>
                <Input
                  id="serving"
                  value={customFood.serving}
                  onChange={(e) => setCustomFood({ ...customFood, serving: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="protein">Protein (g)</Label>
                <Input
                  id="protein"
                  type="number"
                  value={customFood.protein}
                  onChange={(e) => setCustomFood({ ...customFood, protein: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carbs">Carbs (g)</Label>
                <Input
                  id="carbs"
                  type="number"
                  value={customFood.carbs}
                  onChange={(e) => setCustomFood({ ...customFood, carbs: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fat">Fat (g)</Label>
                <Input
                  id="fat"
                  type="number"
                  value={customFood.fat}
                  onChange={(e) => setCustomFood({ ...customFood, fat: e.target.value })}
                />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="meal">Meal</Label>
                <Select value={selectedMeal} onValueChange={setSelectedMeal}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select meal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                    <SelectItem value="snack">Snack</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleAddCustomFood}>Add Food</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <div className="mt-6">
        <h3 className="font-medium mb-2">Today's Food Log</h3>
        <div className="space-y-2 max-h-[300px] overflow-y-auto">
          {loggedFoods.map((food, index) => (
            <Card key={index} className="p-0">
              <CardContent className="p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium">{food.name}</h4>
                      <span className="ml-2 text-xs bg-muted px-2 py-0.5 rounded-full capitalize">{food.meal}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {food.calories} kcal | P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setLoggedFoods(loggedFoods.filter((_, i) => i !== index))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Tabs>
  )
}


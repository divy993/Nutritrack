import Link from "next/link"
import { Activity, Apple, BarChart3, Home } from "lucide-react"

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  return (
    <nav className={`flex items-center space-x-4 lg:space-x-6 ${className}`}>
      <Link href="/" className="flex items-center text-sm font-medium transition-colors hover:text-primary">
        <Home className="mr-2 h-4 w-4" />
        Dashboard
      </Link>
      <Link
        href="#"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Apple className="mr-2 h-4 w-4" />
        Nutrition
      </Link>
      <Link
        href="#"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Activity className="mr-2 h-4 w-4" />
        Workouts
      </Link>
      <Link
        href="#"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <BarChart3 className="mr-2 h-4 w-4" />
        Progress
      </Link>
    </nav>
  )
}


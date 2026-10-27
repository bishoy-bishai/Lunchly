import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, UtensilsCrossed } from 'lucide-react'

import { Button } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { currentUser } from '#/lib/current-user'

export const Route = createFileRoute('/_public/')({
  component: Home,
})

const shortcuts = [
  {
    to: '/restaurants',
    icon: UtensilsCrossed,
    title: 'Restaurants',
    description: 'Browse the places on the lunch rotation and add new ones.',
  },
] as const

function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome back, {currentUser.name.split(' ')[0]}
        </h1>
        <p className="text-muted-foreground">
          Pick a restaurant or check how lunch is going.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {shortcuts.map(({ to, icon: Icon, title, description }) => (
          <Card key={to}>
            <CardHeader>
              <Icon className="text-muted-foreground size-5" />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm">
                <Link to={to}>
                  Open {title}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}

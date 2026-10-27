import { createFileRoute } from '@tanstack/react-router'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>
          Recent picks and team activity will show up here.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm">
        Nothing to report yet.
      </CardContent>
    </Card>
  )
}

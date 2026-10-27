import { createFileRoute } from '@tanstack/react-router'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'

export const Route = createFileRoute('/_public/restaurants/')({
  component: Restaurants,
})

function Restaurants() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Restaurants</CardTitle>
        <CardDescription>
          The lunch rotation lives here once the data layer is wired up.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm">
        No restaurants yet.
      </CardContent>
    </Card>
  )
}

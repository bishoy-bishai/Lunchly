import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/parent/(protected)/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/parent/"!</div>
}

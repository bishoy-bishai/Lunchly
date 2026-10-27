import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kitchen/_protected/orders')({
  component: RouteComponent,
})

function RouteComponent() {
  return <h1 className="display-title text-2xl">Orders</h1>
}

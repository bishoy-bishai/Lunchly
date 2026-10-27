import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/parent/_protected/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/parent/_protected/"!</div>
}

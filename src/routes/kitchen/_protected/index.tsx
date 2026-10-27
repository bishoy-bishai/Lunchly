import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kitchen/_protected/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kitchen/ protected"!</div>
}

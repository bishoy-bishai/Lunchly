import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kitchen/(auth)/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kitchen/signup"!</div>
}

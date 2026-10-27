import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kitchen/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kitchen/login"!</div>
}

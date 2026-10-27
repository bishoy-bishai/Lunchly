import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kitchen/_auth/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kitchen/signup"!</div>
}

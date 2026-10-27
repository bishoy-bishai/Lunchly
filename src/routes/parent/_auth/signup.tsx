import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/parent/_auth/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/parent/(auth)/signup"!</div>
}

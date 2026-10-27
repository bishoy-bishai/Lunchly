import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/parent/(auth)/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/parent/(auth)/signup"!</div>
}

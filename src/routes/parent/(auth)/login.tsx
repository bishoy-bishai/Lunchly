import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/parent/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/parent/(auth)/login"!</div>
}

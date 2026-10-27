import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/parent/_protected/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <h1 className="display-title text-2xl">Profile</h1>
}

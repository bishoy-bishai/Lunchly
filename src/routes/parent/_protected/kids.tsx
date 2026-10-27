import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/parent/_protected/kids')({
  component: RouteComponent,
})

function RouteComponent() {
  return <h1 className="display-title text-2xl">Kids</h1>
}

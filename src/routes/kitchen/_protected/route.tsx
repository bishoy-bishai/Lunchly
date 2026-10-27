import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/kitchen/_protected')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

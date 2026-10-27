import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/parent/_auth')({
  component: ParentAuthLayout,
})

function ParentAuthLayout() {
  return (
    <div
      className="app-shell grid min-h-screen place-items-center px-4"
      data-module="parent"
    >
      <div className="island-shell w-full max-w-sm p-8">
        <p className="island-kicker mb-6">Parent</p>
        <Outlet />
      </div>
    </div>
  )
}

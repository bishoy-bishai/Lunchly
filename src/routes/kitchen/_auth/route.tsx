import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kitchen/_auth')({
  component: KitchenAuthLayout,
})

function KitchenAuthLayout() {
  return (
    <div
      className="app-shell grid min-h-screen place-items-center px-4"
      data-module="kitchen"
    >
      <div className="island-shell w-full max-w-sm p-8">
        <p className="island-kicker mb-6">Kitchen</p>
        <Outlet />
      </div>
    </div>
  )
}

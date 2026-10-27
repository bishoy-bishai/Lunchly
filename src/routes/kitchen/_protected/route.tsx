import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { ClipboardList } from 'lucide-react'

import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { currentUser, initials } from '#/lib/current-user'

export const Route = createFileRoute('/kitchen/_protected')({
  component: KitchenLayout,
})

function KitchenLayout() {
  return (
    <div className="app-shell" data-module="kitchen">
      <header className="border-b border-[var(--line)] bg-[var(--header-bg)]">
        <div className="page-wrap flex h-12 items-center gap-6">
          <Link to="/kitchen" className="flex items-baseline gap-2">
            <span className="display-title text-base font-bold uppercase">
              Kitchen
            </span>
            <span className="island-kicker">Service</span>
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link
              to="/kitchen/orders"
              className="nav-link flex items-center gap-2"
            >
              <ClipboardList className="size-4" />
              Orders
            </Link>
          </nav>

          <Avatar className="ml-auto size-7">
            <AvatarFallback className="text-xs">
              {initials(currentUser.name)}
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="page-wrap py-6">
        <Outlet />
      </main>
    </div>
  )
}

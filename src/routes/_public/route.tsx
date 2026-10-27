import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { LayoutDashboard, UtensilsCrossed } from 'lucide-react'

import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { currentUser, initials } from '#/lib/current-user'

export const Route = createFileRoute('/_public')({
  component: PublicLayout,
})

function PublicLayout() {
  return (
    <div className="app-shell" data-module="public">
      <header className="border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur">
        <div className="page-wrap flex h-14 items-center gap-6">
          <Link to="/" className="display-title text-lg font-semibold">
            Lunchly
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link
              to="/restaurants"
              className="nav-link flex items-center gap-2"
            >
              <UtensilsCrossed className="size-4" />
              Restaurants
            </Link>
            <Link to="/dashboard" className="nav-link flex items-center gap-2">
              <LayoutDashboard className="size-4" />
              Dashboard
            </Link>
          </nav>

          <Avatar className="ml-auto">
            <AvatarFallback>{initials(currentUser.name)}</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="page-wrap py-8">
        <Outlet />
      </main>
    </div>
  )
}

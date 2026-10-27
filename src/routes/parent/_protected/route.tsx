import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { Baby, CreditCard, UserRound } from 'lucide-react'

import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { currentUser, initials } from '#/lib/current-user'

export const Route = createFileRoute('/parent/_protected')({
  component: ParentLayout,
})

function ParentLayout() {
  return (
    <div className="app-shell" data-module="parent">
      <header className="border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur">
        <div className="page-wrap flex h-16 items-center gap-6">
          <Link to="/parent" className="flex flex-col leading-tight">
            <span className="island-kicker">Parent</span>
            <span className="display-title text-lg font-semibold">
              {currentUser.name}
            </span>
          </Link>

          <nav className="ml-auto flex items-center gap-4 text-sm">
            <Link
              to="/parent/kids"
              className="nav-link flex items-center gap-2"
            >
              <Baby className="size-4" />
              Kids
            </Link>
            <Link
              to="/parent/profile"
              className="nav-link flex items-center gap-2"
            >
              <UserRound className="size-4" />
              Profile
            </Link>
            <Link
              to="/parent/subscription"
              className="nav-link flex items-center gap-2"
            >
              <CreditCard className="size-4" />
              Subscription
            </Link>
          </nav>

          <Avatar>
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

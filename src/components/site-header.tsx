import { Link } from '@tanstack/react-router'
import { LayoutDashboard, UtensilsCrossed } from 'lucide-react'

import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { currentUser, initials } from '#/lib/current-user'

const navItems = [
  { to: '/restaurants', label: 'Restaurants', icon: UtensilsCrossed },
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
] as const

export function SiteHeader() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-6 px-4">
        <Link to="/" className="font-semibold tracking-tight">
          Lunchly
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="text-muted-foreground hover:text-foreground hover:bg-accent data-[status=active]:text-foreground data-[status=active]:bg-accent flex items-center gap-2 rounded-md px-3 py-1.5 transition-colors"
            >
              <Icon className="size-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <span className="hidden text-sm font-medium sm:inline">
            {currentUser.name}
          </span>
          <Avatar>
            <AvatarFallback>{initials(currentUser.name)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

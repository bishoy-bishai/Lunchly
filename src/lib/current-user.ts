export interface CurrentUser {
  name: string
  email: string
}

// Placeholder until auth is wired up.
export const currentUser: CurrentUser = {
  name: 'Bishoy Bishai',
  email: 'bishoy.bishai.eg@gmail.com',
}

export function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

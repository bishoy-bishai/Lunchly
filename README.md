# Lunchly

Weekly lunchbox delivery for kids, by subscription.

Parents subscribe to a restaurant and pick their children's meals for the week. Every meal shows what's in it and its nutritional values. Restaurants see how many meals they need to prepare each day and which addresses they go to.

> Status: early development (MVP). No payments yet: a subscription is activated directly.

## Features (MVP scope)

**Parents**
- Create an account and add children (name, age, allergies)
- Save a delivery address
- Subscribe to a restaurant
- Choose a meal for each day of the week

**Restaurants**
- Add meals with ingredients and nutritional values
- See the week's orders grouped by day and delivery address

**Public**
- Browse restaurants and their menus

## Tech stack

| Area | Tool |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR, server functions) |
| Routing | TanStack Router (file-based, type-safe search params) |
| Server state | TanStack Query |
| Forms | TanStack Form |
| Tables | TanStack Table |
| Database | SQLite via better-sqlite3 |
| ORM and migrations | Drizzle ORM and drizzle-kit |
| Env validation | T3 Env and Zod |
| UI | Tailwind CSS v4, shadcn/ui, lucide-react |
| Auth (planned) | Better Auth |
| Tooling | TypeScript (strict), ESLint, Prettier |

## Getting started

### Prerequisites

- Node.js 22+
- Yarn 1.x

### Setup

```bash
# 1. Install dependencies
yarn install

# 2. Create your local env file
cp .env.example .env

# 3. Create the database and run migrations
yarn db:migrate

# 4. Start the dev server
yarn dev
```

The app runs at http://localhost:3000.

## Environment variables

| Variable | Required | Description | Example |
|---|---|---|---|
| `DATABASE_URL` | Yes | Path to the SQLite database file | `./data/lunchly.db` |
| `SERVER_URL` | No | Public URL of the server | `http://localhost:3000` |
| `VITE_APP_TITLE` | No | App title exposed to the client | `Lunchly` |

Variables are validated at startup in `src/env.ts`. The app stops with a clear error if a required one is missing. Only variables prefixed with `VITE_` reach the browser.

## Scripts

| Script | What it does |
|---|---|
| `yarn dev` | Start the dev server on port 3000 |
| `yarn build` | Production build |
| `yarn preview` | Preview the production build |
| `yarn typecheck` | Type-check with `tsc --noEmit` |
| `yarn lint` | Run ESLint |
| `yarn format` | Format with Prettier and auto-fix ESLint issues |
| `yarn check` | Check formatting without writing |
| `yarn generate-routes` | Regenerate the route tree |
| `yarn db:generate` | Generate a SQL migration from `src/db/schema.ts` |
| `yarn db:migrate` | Apply pending migrations to the database |
| `yarn db:studio` | Open Drizzle Studio to browse the database |

## Database workflow

The schema lives in `src/db/schema.ts`. Migrations live in `drizzle/` and are committed to Git. The database file (`data/*.db`) is never committed.

To change the schema:

1. Edit `src/db/schema.ts`
2. Run `yarn db:generate` and review the generated SQL in `drizzle/`
3. Run `yarn db:migrate`
4. Commit the schema change **and** the migration together

Use `generate` and `migrate`, not `db:push`, so every environment ends up with the same schema.

## Project structure

```
├── drizzle/              # SQL migrations (committed)
├── data/                 # Local SQLite database (gitignored)
├── public/               # Static assets
└── src/
    ├── components/
    │   ├── ui/           # shadcn/ui components
    │   └── site-header.tsx
    ├── db/
    │   ├── index.ts      # Database connection (server only)
    │   └── schema.ts     # Drizzle schema
    ├── integrations/     # TanStack Query provider and devtools
    ├── lib/              # Shared helpers
    ├── routes/           # File-based routes
    ├── env.ts            # Validated environment variables
    └── router.tsx        # Router setup
```

`src/db` is server-only. Use it inside server functions, never import it from client components.

## Conventions

- TypeScript strict mode, no `any`
- [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, `refactor:`...)
- Small commits, one change each
- `typecheck`, `lint` and `check` must pass before pushing

## Roadmap

- [x] Project setup (TanStack Start, Tailwind, shadcn/ui, Drizzle, SQLite)
- [ ] Authentication and roles (parent / restaurant) with Better Auth
- [ ] Restaurant meals with ingredients and nutrition
- [ ] Parent children, addresses and subscriptions
- [ ] Weekly meal selection
- [ ] Restaurant weekly orders view
- [ ] Docker deployment (Node server with a persistent volume)
- [ ] Payments
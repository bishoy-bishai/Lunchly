import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: ['.env'] })

// Read process.env directly: `#/env` would be evaluated before dotenv runs.
const url = process.env.DATABASE_URL
if (!url) throw new Error('DATABASE_URL is not set')

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url,
  },
})

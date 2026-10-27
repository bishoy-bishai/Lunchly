import { sql } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const restaurants = sqliteTable('restaurants', {
  id: text().primaryKey(),
  name: text().notNull(),
  created_at: text('created_at')
    .notNull()
    .default(sql`(current_timestamp)`),
})

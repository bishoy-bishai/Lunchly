import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const restaurants = sqliteTable('restaurants', {
  id: text().primaryKey(),
  name: text().notNull(),
  created_at: integer({ mode: 'timestamp' }).notNull().default(new Date()),
})

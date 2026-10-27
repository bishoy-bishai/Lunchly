import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const restaurants = sqliteTable('restaurants', {
  id: text().primaryKey(),               
  name: text().notNull(),                
  createdAt: integer({ mode: 'timestamp' }).notNull(),
})
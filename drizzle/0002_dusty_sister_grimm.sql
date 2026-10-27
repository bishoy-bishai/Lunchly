PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_restaurants` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_restaurants`("id", "name", "created_at") SELECT "id", "name", "created_at" FROM `restaurants`;--> statement-breakpoint
DROP TABLE `restaurants`;--> statement-breakpoint
ALTER TABLE `__new_restaurants` RENAME TO `restaurants`;--> statement-breakpoint
PRAGMA foreign_keys=ON;